// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// "https://firebase.google.com/docs/web/setup#available-libraries"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgOzOnvRwuxPUP8qH4HQJlG9TnTZ3qo8U",
  authDomain: "trade-and-barter-76a9c.firebaseapp.com",
  projectId: "trade-and-barter-76a9c",
  storageBucket: "trade-and-barter-76a9c.appspot.com",
  messagingSenderId: "313189601824",
  appId: "1:313189601824:web:1c8db38649f6fe66722245",
  measurementId: "G-R6KLWBWT88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function uploadImage(){
    const ref = firebase.storage().ref()
    const file = document.querySelector("Photo").files[0]
    const name = new Date() + '-' + file.name
    const metaData = {
        contentType:file.contentType
    }
    const task = ref.child(name).put(file,metaData)

    task.then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        console.log(url)
        alert("Image upload successful")
        
    })
}