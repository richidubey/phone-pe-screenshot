  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC-D05cN2cFmG3AzaBpGZklFZdFvo2EwVc",
    authDomain: "awesomeus-2573b.firebaseapp.com",
    databaseURL: "https://awesomeus-2573b.firebaseio.com",
    projectId: "awesomeus-2573b",
    storageBucket: "awesomeus-2573b.appspot.com",
    messagingSenderId: "910570119526",
    appId: "1:910570119526:web:416ae3008210e55e7628a7",
    measurementId: "G-L7SNRHL4EZ"
  };
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);  //initializing our connection to the application of firebase
  firebase.analytics();

  //make auth and firestore references
  const auth = firebase.auth();   //when we sign up another user, it would be attached to this constant
  const db = firebase.database(); //initializes the firestore connection //used to link it to database