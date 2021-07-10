import firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyD5wc6qh7fuJrufO4F5_7lQwsrN3lgY2dk",
    authDomain: "paying-guest-835e5.firebaseapp.com",
    projectId: "paying-guest-835e5",
    storageBucket: "paying-guest-835e5.appspot.com",
    messagingSenderId: "143655414001",
    appId: "1:143655414001:web:17fb47c28f54360d436150"
  };

  const Fire =firebase.initializeApp(firebaseConfig);

  export default Fire;