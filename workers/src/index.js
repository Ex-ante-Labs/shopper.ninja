"use strict"
import {
  stream,
  streamArray
} from './lib/ed-ilyin'
import {
  getCategories
} from './lib/e-maxima'

const languages = ['en', 'ru', 'lv']

streamArray(languages)
  .pipe(getCategories)
  .pipeStreamThenArray(c => c.data[0].Childs.map(sc => ({
    meta: Object.assign({}, c.meta),
    data: sc
  })))
  .pipeStreamThen(console.log)