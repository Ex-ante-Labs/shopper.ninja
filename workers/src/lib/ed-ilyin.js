"use strict";
// import {
//   initializeApp,
//   database
// } from 'firebase'
import {
  parse
} from 'node-uuid'

// class StreamArray extends Readable{
//   constructor(array) {
//     super({
//       objectMode: true
//     })
//     this._array = array
//     this._index = 0
//   }
//   _read() {
//     if (this._index < this._array.length) return this.push(this._array[this._index++])
//     return this.push(null)
//   }
// }

class ReadableStream {
  constructor(fn) {
    this._fn = fn
    this.pipe = this.pipe.bind(this)
    console.log('readConstructor', this, this._fn)
  }
  pipe(stream) {
    this.push = stream.write
    this._fn = this._fn.bind(this)
    console.log('readPipe', this, stream)
    return this._fn.call(this)
  }
}

function readableStream(fn) {
  return new ReadableStream(fn)
}

class Stream {
  constructor(fn) {
    this.pipe = stream => {
      this._stream = stream
      console.log('pipe', this, stream)
    }
    this.push = obj => {
      console.log('push', this, obj)
      this._stream.write(obj)
    }
    this.write = obj => {
      console.log('write', this, obj)
      fn(this, obj)
    }
    console.log('constructor', this, fn)
  }
}

function stream(fn) {
  return new Stream(fn)
}

export const streamArray = array => ({ pipe: stream => array.map(stream.write) })

export const prepareOptions = uri => stream((self, language) => self.push({
  uri,
  headers: {
    'Accept-Language': language
  },
  json: true
}))

export const log = { write: obj => console.log(obj) }

// export const prepareOptions = uri => transform(language => ({
//   uri,
//   headers: {
//     'Accept-Language': language
//   },
//   json: true
// }))

// class Stream extends Duplex {
//   constructor(fn) {
//     super({
//       allowHalfOpen: true,
//       objectMode: true
//     })
//     this._fn = fn
//     this._promises = []
//   }
//   _write(obj, enc, cb) {
//     this._promises.push(this._fn(obj))
//     return cb()
//   }
//   _read() {

//   }
// }
// export const stream = fn => new Stream(fn)

// export const then = fn => transform(async promise => fn(await promise))

// export const thenMap = fn => transformMap(async promise =>
//   fn(await promise).map(this.push)
// )

// export const log = transform(console.log)

// function transform(fn) {
//   return obj(function (obj, enc, cb) {
//     this.push(fn(obj))
//     return cb()
//   })
// }

// function transformMap(fn) {
//   return obj(function(obj, enc, cb) {
//     const array = fn.call(this, obj)
//     return cb()
//   })
// }

// initializeApp({
//   serviceAccount: "firebase-credentials.json",
//   databaseURL: "https://shopper-ninja.firebaseio.com"
// })

// function propertyMap(property) {
//   return obj(function(obj, enc, cb) {
//     if (obj[property].length) obj[property].map(item => this.push(item))
//     else this.push(obj)
//     return cb()
//   })
// }

function base64url(uuid) {
  return Buffer(parse(uuid))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}
