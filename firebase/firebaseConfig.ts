import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBzQxcdfvDNp7tnLC5ftZFxFNIEt-ZQs_E',
  authDomain: 'drview-demo.firebaseapp.com',
  databaseURL:
    'https://drview-demo-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'drview-demo',
  storageBucket: 'drview-demo.appspot.com',
  messagingSenderId: '465817041022',
  appId: '1:465817041022:web:51c5a538b71d3205b8c02f',
  measurementId: 'G-RM211E8XSL',
}

export const app: any = initializeApp(firebaseConfig)

export const db = getDatabase()
export const auth = getAuth()
export const storage = getStorage()
auth.languageCode = 'vi'
