import {
  stream
} from './ed-ilyin'
import {
  get
} from 'request-promise-native'

export const getCategories = stream(get)