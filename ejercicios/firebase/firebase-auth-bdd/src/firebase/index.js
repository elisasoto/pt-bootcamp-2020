import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//const firebaseConfig = {
//  apiKey: 'AIzaSyB2dkKSCaR9RkoQShvO9RfRbwh07aY6Hk0',
//  authDomain: 'thebridge-sept-2020.firebaseapp.com',
//  projectId: 'thebridge-sept-2020',
//  storageBucket: 'thebridge-sept-2020.appspot.com',
//  messagingSenderId: '972441414925',
//  appId: '1:972441414925:web:d4b33b942f3eebcf205444',
//};

const firebaseConfig = {
  apiKey: "AIzaSyDptI-ZbpflVv89m79r-cx-neb1LqcxISs",
  authDomain: "test-project-e161c.firebaseapp.com",
  projectId: "test-project-e161c",
  storageBucket: "test-project-e161c.appspot.com",
  messagingSenderId: "114718378199",
  appId: "1:114718378199:web:fb963cc6ab85acd2df0892"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
