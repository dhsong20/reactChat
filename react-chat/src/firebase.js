import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyB_cw_8Km5-cwotQjFphuG0At5CqSB2tZ0",
  authDomain: "react-chat-5a4ec.firebaseapp.com",
  databaseURL: "https://react-chat-5a4ec.firebaseio.com",
  projectId: "react-chat-5a4ec",
  storageBucket: "react-chat-5a4ec.appspot.com",
  messagingSenderId: "73463432145",
  appId: "1:73463432145:web:e7d0209109f9c4ec4e16f0",
  measurementId: "G-0F75NZ35HP"
}

firebase.initializeApp(firebaseConfig)

export default firebase

