import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

let firebaseApp;
export let firebaseDatabase: any;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

if (firebaseConfig.apiKey && firebaseConfig.authDomain) {
  firebaseApp = initializeApp(firebaseConfig);
  firebaseDatabase = getDatabase(firebaseApp);
} else {
  alert("error accessing firebase");
  window.location.reload();
}
