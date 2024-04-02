import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDhyzo1NMYZwuJCAWOd7FLgvUXs47zll9w",
  authDomain: "car-rental-682d4.firebaseapp.com",
  projectId: "car-rental-682d4",
  storageBucket: "car-rental-682d4.appspot.com",
  messagingSenderId: "716207643090",
  appId: "1:716207643090:web:37773aa84ab01b52dbd00b"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)

export default app
