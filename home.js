firebase.auth().onAuthStateChanged(function (user) {
    alert(JSON.stringify(user))
    if (user) {
        // User is signed in.
        alert(JSON.stringify(user))
    } else {
        // No user is signed in.
        window.location.href="/index.html"
    }
});
  document.querySelector(".logout-button").addEventListener("click", function(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
  })
