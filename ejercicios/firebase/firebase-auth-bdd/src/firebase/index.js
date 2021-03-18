import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDrqlOfmObAs9pZJTfV25JDtaH_mwpuHtI",
    authDomain: "elisa-soto-the-bridge-2020.firebaseapp.com",
    projectId: "elisa-soto-the-bridge-2020",
    storageBucket: "elisa-soto-the-bridge-2020.appspot.com",
    messagingSenderId: "612651002700",
    appId: "1:612651002700:web:06105cea26968800453de9"
  };


  if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig)
}

export default firebase

