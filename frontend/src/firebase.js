import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCsxsUuP43YQnf7WqMrpC-UoIJ5djX04HQ",
    authDomain: "schedule-firebase-98d7c.firebaseapp.com",
    projectId: "schedule-firebase-98d7c",
    storageBucket: "schedule-firebase-98d7c.firebasestorage.app",
    messagingSenderId: "694958165026",
    appId: "1:694958165026:web:65a6a2bb8be1d4191ace7b",
    measurementId: "G-E8GP8Z909L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);