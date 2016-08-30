import {
  streamAsync
} from './ed-ilyin'
import {
  get
} from 'request-promise-native'

export const getCategories = streamAsync(async function (language) {
  const options = {
    uri: 'https://beta.e-maxima.lv/nextgenapi/api/products/GetCategories',
    headers: {
      'Accept-Language': language
    },
    json: true
  }
  const data = await get(options)
  return {
    meta: { language },
    data
  }
})