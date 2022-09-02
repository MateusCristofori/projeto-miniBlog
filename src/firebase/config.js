// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCzhT0OsDfrJ-JMxJQmAuLWdCK1fQmYGZk',
  authDomain: 'miniblog-12463.firebaseapp.com',
  projectId: 'miniblog-12463',
  storageBucket: 'miniblog-12463.appspot.com',
  messagingSenderId: '705537572060',
  appId: '1:705537572060:web:d58970dbf54d8395318819'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
