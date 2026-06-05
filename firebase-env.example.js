// firebase-env.example.js — APENAS MODELO (sem chaves reais)
// No PC: copie para firebase-env.js e preencha (arquivo ignorado pelo git).
// No GitHub Pages: o Actions gera firebase-env.js a partir dos Secrets.

import { initializeApp, getApp, deleteApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, setDoc, deleteDoc, collection, getDocs, getDoc, query, where } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.firebasestorage.app",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:xxxxxxxx"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
let storage = null;
try {
    storage = getStorage(app);
} catch (_) {
    /* Storage não ativo no projeto — Firestore continua funcionando */
}

export { firebaseConfig, app, db, storage, auth, collection, doc, setDoc, deleteDoc, getDocs, getDoc, query, where };
