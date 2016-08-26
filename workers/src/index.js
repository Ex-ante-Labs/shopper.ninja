"use strict"
import {
  initializeApp,
  database
} from 'firebase'
import {
  jar,
  get
} from 'request-promise-native'

initializeApp({
  serviceAccount: "firebase-credentials.json",
  databaseURL: "https://shopper-ninja.firebaseio.com"
})

// get langugage scepicig jar
const options = {
  uri: 'https://beta.e-maxima.lv/en',
  jar: jar()
}

const h = await get(options)
