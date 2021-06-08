import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import firebase from 'firebase';

import NewGame from "pages/NewGame";

import 'font-awesome/css/font-awesome.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyDP20MLf7b1LH8QASkzOTlXQvCaDEp5ZnA",
  authDomain: "yahtzee-1f753.firebaseapp.com",
  databaseURL: "https://yahtzee-1f753-default-rtdb.firebaseio.com",
  projectId: "yahtzee-1f753",
  storageBucket: "yahtzee-1f753.appspot.com",
  messagingSenderId: "111541933062",
  appId: "1:111541933062:web:134c31df977d3c045f9f87",
  measurementId: "G-VY7R6423XJ",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
export const db = firebase.firestore();

export default function Home() {
  
  return (
    <div className="container">
      <NewGame />
    </div>
  );
}
