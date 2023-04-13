// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyArDtGqN2bYYYZy3WTOYnm_MPZcR7VItiI",
    authDomain: "filmyverse-13c98.firebaseapp.com",
    projectId: "filmyverse-13c98",
    storageBucket: "filmyverse-13c98.appspot.com",
    messagingSenderId: "1048051497695",
    appId: "1:1048051497695:web:fbeaec53c229438116876a",
    measurementId: "G-RQ071SXF2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

// const analytics = getAnalytics(app);
export default app;


// import { initializeApp } from "firebase/app";
// import { getFirestore, collection } from 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: "filmy-4e1c5.firebaseapp.com",
//     projectId: "filmy-4e1c5",
//     storageBucket: "filmy-4e1c5.appspot.com",
//     messagingSenderId: "206563926562",
//     appId: "1:206563926562:web:cb0f036f3426455472e07b"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const moviesRef = collection(db, "movies");
// export const reviewsRef = collection(db, "reviews");
// export const usersRef = collection(db, "users");

// export default app;