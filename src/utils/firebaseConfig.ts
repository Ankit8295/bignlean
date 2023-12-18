"use client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRh-sPdVzC8VMVgzVu5Hl16wu8tQ5e4TQ",
  authDomain: "bignlean-c415a.firebaseapp.com",
  projectId: "bignlean-c415a",
  storageBucket: "bignlean-c415a.appspot.com",
  messagingSenderId: "819498599934",
  appId: "1:819498599934:web:a1dd8b044f852e3fff6caf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
