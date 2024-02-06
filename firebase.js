// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBppYIBeGGG9_A9Jix7MZa5v6bXPG6AzP8",
  authDomain: "weather-19b7e.firebaseapp.com",
  databaseURL: "https://weather-19b7e-default-rtdb.firebaseio.com",
  projectId: "weather-19b7e",
  storageBucket: "weather-19b7e.appspot.com",
  messagingSenderId: "135047709000",
  appId: "1:135047709000:web:3c4252c68f3b87fb8ef37d",
  measurementId: "G-74BFKJTTRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Reference to the Firebase Realtime Database
const db = getDatabase(app);
const storageUrl = "https://weather-19b7e-default-rtdb.firebaseio.com/"; // Update the URL to the correct path in your database

// Use the Fetch API to load the JSON file
fetch(storageUrl)
  .then(response => response.json())
  .then(data => {
    // Access the data and update the content on your webpage
    document.getElementById('output').innerHTML = `
        <p>Name: ${data.bmp}</p>
        <p>Age: ${data.hehe}</p>
    `;
  })
  .catch(error => console.error('Error loading JSON file:', error));
