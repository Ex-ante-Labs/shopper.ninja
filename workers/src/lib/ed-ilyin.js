"use strict";
// import {
//   initializeApp,
//   database
// } from 'firebase'
import {
  parse
} from 'node-uuid'

class Stream {
  constructor(fn) {
    const _buffer = []
    this.write = obj => _buffer.push(fn(obj))
    this.pipe = stream => {
      _buffer.map(obj => stream.write(obj))
      return stream
    }
    this.pipeThen = stream => {
      _buffer.map(then)
      return stream
      async function then(promise) {
        return stream.write(await promise)
      }
    }
    this.pipeStream = fn => {
      const stream = new Stream(fn)
      this.pipe(stream)
      return stream
    }
    this.pipeStreamThen = fn => {
      return this.pipeStream(then)
      async function then(promise) {
        return fn(await promise)
      }
    }
    this.pipeStreamThenArray = fn => {
      return this.pipeStream(then)
      async function then(promise) {
        return fn(await promise)
      }
    }
    this.pipeStreamThenMap = fn => {
      return this.pipeStreamThen(a => a.map(fn))
    }
    this.pipeStreamThenDataMap = fn => {
      return this.pipeStreamThen(o => fn(o.data.map(i => ({
        meta: Object.assign({}, o.meta),
        data: i
      }))))
    }
  }
}

export const stream = fn => new Stream(fn)

export const streamArray = array => {
  const stream = new Stream(i => i)
  array.map(stream.write)
  return stream
}

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
