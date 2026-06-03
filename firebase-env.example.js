// firebase-env.example.js
// ARQUIVO DE EXEMPLO - As chaves reais são injetadas pelo GitHub Actions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBVsHVxn0wG_UozPCT_Ac3kco62gH2r3P0",
    authDomain: "controlveic.firebaseapp.com",
    projectId: "controlveic",
    storageBucket: "controlveic.firebasestorage.app",
    messagingSenderId: "450313596741",
    appId: "1:450313596741:web:c9de01c10d9929d8e2582c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };