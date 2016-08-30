"use strict"
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
    return cb(null, this._fn(obj))
  }
}
export const stream = fn => new Stream(fn)

class StreamMap extends Stream {
  _transform(obj, e, cb) {
    const array = this._fn(obj)
    array.map(i => this.push(i))
    return cb()
  }
}
export const streamMap = fn => new StreamMap(fn)

class StreamAsync extends Stream {
  constructor(fn) {
    super(fn)
    this._promises = []
  }
  _transform(obj, e, cb) {
    const promise = then.call(this)
    this._promises.push(promise)
    return cb()
    async function then() {
      try {
        const result = await this._fn(obj)
        return this.push(result)
      } catch (e) { console.log(e) }
    }
  }
  async _flush(cb) {
    try {
      await Promise.all(this._promises)
      return cb(null, null)
    } catch (e) { console.log(e) }
  }
}
export const streamAsync = fn => new StreamAsync(fn)

export const metaMap = (obj, array) => array.map(i => ({
  meta: obj.meta,
  data: i
}))

export const base64Url = uuid => Buffer(parse(uuid))
  .toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/=/g, '')