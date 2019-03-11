import firebase from 'firebase';


const config = {
  // Initialize Firebase
  
    apiKey: "AIzaSyBH4ofVRDYKANowO1RwffrgJ3sjI0YTwRs",
    authDomain: "myfirstproject-8e87b.firebaseapp.com",
    databaseURL: "https://myfirstproject-8e87b.firebaseio.com",
    projectId: "myfirstproject-8e87b",
    storageBucket: "myfirstproject-8e87b.appspot.com",
    messagingSenderId: "331983185394"
  };
  const fire = firebase.initializeApp(config);
  export default fire;