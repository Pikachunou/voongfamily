// var email = window.prompt('Please provide your email');
// var password = window.prompt('Please provide your password');
// firebase.auth().signInWithEmailAndPassword(email, password)
// .then(function(){
//     console.log("success")
// })
// .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     console.log(errorCode)
//     var errorMessage = error.message;
//     // ...
//   });
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    FIREBASE_CONFIGURATION
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
            console.log("success")
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ...
        });
})
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
          window.location.href="/home.html"
    } else {
        // No user is signed in.
        
    }
});

