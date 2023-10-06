// firebase.auth().onAuthStateChanged(function (user) {
//     alert(JSON.stringify(user))
//     if (user) {
//         // User is signed in.
//         alert(JSON.stringify(user))
//     } else {
//         // No user is signed in.
//         window.location.href="/index.html"
//     }
// });
//   // document.querySelector(".logout-button").addEventListener("click", function(){
//   //   firebase.auth().signOut().then(function() {
//   //       // Sign-out successful.
//   //     }).catch(function(error) {
//   //       // An error happened.
//   //     });
//   // })
function uploadImage() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
  
    if (file) {
      // Create a reference to the storage location
      const storageRef = firebase.storage().ref('Pictures/' + file.name); // Use firebase.storage() here
  
      // Upload the file to Firestore Storage
      const uploadTask = storageRef.put(file);
  
      // Monitor the upload progress
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Handle progress (e.g., show a progress bar)
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
          // Handle errors
          console.error('Error uploading image: ', error);
        }, 
        () => {
          // Handle successful upload
          console.log('Image uploaded successfully');
  
          // You can retrieve the download URL to store in Firestore or use in your application
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            // Now you can store this URL in Firestore or use it as needed.
          });
        }
      );
    }
}
