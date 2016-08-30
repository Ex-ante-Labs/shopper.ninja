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
  .pipeStream(c => c)
  .pipeStream(console.log)