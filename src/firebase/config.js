import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBFB8Hmjg4UL5XrM4ctV7xkHfmy9RJ5Y-M",
  authDomain: "vue-firebase-tutorial-site.firebaseapp.com",
  projectId: "vue-firebase-tutorial-site",
  storageBucket: "vue-firebase-tutorial-site.appspot.com",
  messagingSenderId: "230171556973",
  appId: "1:230171556973:web:c2ba15411025225f29d364",
  measurementId: "G-DGTQELCQ3B"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }