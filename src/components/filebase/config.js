import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const config = firebase.initializeApp({
  apiKey: 'AIzaSyAoKVCjulnqJkh1bp8CNLlft4kZHD_6ceM',
  authDomain: 'guest-ae545.firebaseapp.com',
  projectId: 'guest-ae545',
  storageBucket: 'guest-ae545.appspot.com',
  messagingSenderId: '880318703011',
  appId: '1:880318703011:web:90644207b52c90b5c66616',
  measurementId: 'G-LC9X0HHECG',
})

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default config
