"use strict"
import {
  stream,
  streamArray,
  streamMap,
  metaMap,
  base64Url,
  log
} from './lib/ed-ilyin'
import {
  getCategories
} from './lib/e-maxima'
import {
  updateDb
} from './lib/shopper'

const languages = ['en', 'ru', 'lv']
const maxima2Shopper = stream(category => {
  const update = {}
  const [key, value] = category2Update(category.data)
  update[`products/${key}`] = value
  return update
  function category2Update(c) {
    const key = base64Url(c.CategoryId)
    update[`locales/${category.meta.language}/categoryName_${key}`] = c.Name
    return [
      key,
      {
        image: `https://beta.e-maxima.lv${c.SmallImageUrl}`,
        sub: c.ChildCategories
          .map(category2Update)
          .reduce((o, [key, value]) => {
            o[key] = value
            return o
          }, {})
      }
    ]
  }
})

streamArray(languages)
  .pipe(getCategories)
  .pipe(streamMap(c => metaMap(c, c.data[0].Childs)))
  .pipe(maxima2Shopper)
  .pipe(updateDb())
  .pipe(log)