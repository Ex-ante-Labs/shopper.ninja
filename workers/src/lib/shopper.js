"use strict"
import {
  initializeApp,
  database
} from 'firebase'
import {
  streamAsync
} from './ed-ilyin'

initializeApp({
  serviceAccount: "firebase-credentials.json",
  databaseURL: "https://shopper-ninja.firebaseio.com"
})
const db = database()
export const updateDb = path => {
  const ref = db.ref(path)
  return streamAsync(update => ref.update(update))
}