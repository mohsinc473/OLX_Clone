import React from "react";
import firebase from '../../config/firebase';


const facebookLogin = () => {
  return (dispatch) => {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        let userNode = {
            name : user.displayName,
            email : user.email,
            avatar : user.photoURL,
            uid : user.uid,
        }
        firebase.database().ref('/').child(`users/${user.uid}`).set(userNode)
        .then(() => {
            // alert("Login Succesful");
            dispatch({type:"Auth",data:userNode})
        })

      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
};

export { facebookLogin };
