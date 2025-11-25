import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGhBa9cM9bp-9JoHiNGq95H_pgxAD-d64",
  authDomain: "bitbreaker-potfolio.firebaseapp.com",
  projectId: "bitbreaker-potfolio",
  storageBucket: "bitbreaker-potfolio.firebasestorage.app",
  messagingSenderId: "831439358190",
  appId: "1:831439358190:web:db8d1aef46559b2f3acbff",
  measurementId: "G-JK73Q2MJKL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addContactMessage(data) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}