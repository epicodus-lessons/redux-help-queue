import React from "react";
import firebaseui from "firebaseui";
import firebase from "firebase/app";

function Signin(){  
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  return (
    <h1>Sign In</h1>
  );
}

export default Signin;