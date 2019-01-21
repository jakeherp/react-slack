import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBq7W8xV40eFowFF0of48v5fkFhNk7TPfY",
  authDomain: "react-slack-7a921.firebaseapp.com",
  databaseURL: "https://react-slack-7a921.firebaseio.com",
  projectId: "react-slack-7a921",
  storageBucket: "react-slack-7a921.appspot.com",
  messagingSenderId: "1005224826836"
};
firebase.initializeApp(config);

export default firebase;
