import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVXairsksut9n2JfhqyL7vMMFqcvn5GIk",
    authDomain: "black-country-homes.firebaseapp.com",
    projectId: "black-country-homes",
    storageBucket: "black-country-homes.appspot.com",
    messagingSenderId: "44936017272",
    appId: "1:44936017272:web:5b6953bf15d0ccbe51448d",
    measurementId: "G-LVGZV8WK6Z"
};

export default defineNuxtPlugin(() => {
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication
  const auth = getAuth(firebaseApp);

  // Provide Firebase and Auth services globally in the app
  return {
    provide: {
      firebaseApp,
      auth,
    },
  };
});
