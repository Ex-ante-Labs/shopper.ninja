"use strict"
import {
  streamArray,
  prepareOptions,
  log
} from './lib/ed-ilyin'

const languages = ['en', 'ru', 'lv']
streamArray(languages)
  .pipe(prepareOptions(
    'https://beta.e-maxima.lv/nextgenapi/api/products/GetCategories'))
  .pipe(log)
  // .pipe(log)
