import * as firebase from 'firebase'
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDOV9i8N95oC2OlOiISTxM15rnXPz7L3Us",
  authDomain: "pecfp-304521.firebaseapp.com",
  databaseURL: "https://pecfp-304521-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pecfp-304521",
  storageBucket: "pecfp-304521.appspot.com",
  messagingSenderId: "318160272178",
  appId: "1:318160272178:web:1a19677d6a6c8262e1f52b"
};


let app;


if (firebase.apps.length===0){
  app=firebase.initializeApp(firebaseConfig)
}else{
  app=firebase.app();
}

const db = app.firestore()
const auth = firebase.auth()

export {firebase,db,auth};

