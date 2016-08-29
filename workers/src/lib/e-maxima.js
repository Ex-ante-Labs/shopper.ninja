import {
  stream
} from './ed-ilyin'
import {
  get
} from 'request-promise-native'

export const getCategories = stream(async function(language) {
  const options = {
    uri: 'https://beta.e-maxima.lv/nextgenapi/api/products/GetCategories',
    headers: {
      'Accept-Language': language
    },
    json: true
  }
  return {
    meta: {language},
    data: await get(options)
  }
})