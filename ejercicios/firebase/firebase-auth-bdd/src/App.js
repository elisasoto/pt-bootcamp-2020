import { useState, useEffect } from "react";
import { getVehicles, getVehiclesbyType,getVehiclesbyId } from './firebase/firestore';

import firebase from "./firebase";

const email = "test2@hotmail.com";
const password = 'lkjdfoi328"!J#';

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((currentUser)=>{
      console.log('onAuthStateChanged', currentUser);
      if (currentUser){
        const email = currentUser.email
        const userId = currentUser.uid

        setUser({
          isNewUser: false, 
          email, 
          id: userId
        })
      } else {
        setUser(null)
      }
    })
  }, [])

  useEffect(() => {
    //getVehicles();
    //getVehiclesbyType('car')
    getVehiclesbyId('EN5Ass4p0ZeUNaWpxEj4').then(console.log)
  }, []);

  function handleRegister() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log("the error =>", error);
        if (error.code === "auth/email-already-in-use") {
          alert("el usuario ya existe");
        }
      });
  }

  function handleLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log("the error =>", error);
        if (error.code === "auth/user-not-found") {
          alert("el usuario no existe");
        }
      });
  }

  function handleLogout() {
    firebase.auth().signOut()
  }

function googleSignin(){
  const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        // Desde este .then podemos hacer calculos adicionales con los tokens o el perfil del user
        const { profile } = result.additionalUserInfo;
        console.log(profile.name, profile.picture);
      })
      .catch((err) => {
        console.log(err);
      });
}


  return (
    <div className="App">
      <h1>my app</h1>
      {user ? (
        <>
        <h2>the user: {user.email}</h2>
        <p>your id: {user.id}</p>
        <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={handleRegister}>Create a user</button>
          <button onClick={handleLogin}>Signin</button>
          <button onClick={googleSignin}>Google SignIn</button>
        </>
      )}
    </div>
  );
}

export default App;
