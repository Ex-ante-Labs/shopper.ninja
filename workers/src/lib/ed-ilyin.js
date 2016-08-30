"use strict";
// import {
//   initializeApp,
//   database
// } from 'firebase'
import {
  parse
} from 'node-uuid'
import {
  Readable,
  Transform
} from 'stream'

class StreamArray extends Readable {
  constructor(array) {
    super({ objectMode: true })
    this._array = array
    this._index = 0
    this.pipeStream = fn => {
      const stream = new Stream(fn)
      this.pipe(stream)
      return stream
    }
  }
  _read() {
    // console.log('readArray', this._index)
    if (this._index < this._array.length) {
      this.push(this._array[this._index++])
    } else { this.push(null) }
  }
}

export const streamArray = array => new StreamArray(array)

class Stream extends Transform {
  constructor(fn) {
    super({ objectMode: true })
    this._fn = fn
    this.pipeStream = fn => {
      const stream = new Stream(fn)
      this.pipe(stream)
      return stream
    }
  }
  _transform(obj, e, cb) {
    // console.log('transform', obj)
    this.push(this._fn(obj))
    return cb()
  }
}

export const stream = fn => new Stream(fn)

class StreamAsync extends Stream {
  constructor(fn) {
    super(fn)
    this._promises = []
  }
  _transform(obj, e, cb) {
    // console.log('transormAsync', obj)
    this._promises.push(this._fn(obj))
    return cb()
  }
  async _flush(cb) {
    try {
      // console.log('asyncRead', this._promises)
      const promises = this._promises.map(p => then.call(this, p))
      await Promise.all(promises)
      this.push(null)
      return cb()
      async function then(promise) {
        try {
          const result = await promise
          return this.push(result)
        } catch (e) { console.log(e) }
      }
    } catch (e) { console.log(e) }
  }
}

export const streamAsync = fn => new StreamAsync(fn)

// initializeApp({
//   serviceAccount: "firebase-credentials.json",
//   databaseURL: "https://shopper-ninja.firebaseio.com"
// })

function base64url(uuid) {
  return Buffer(parse(uuid))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}
