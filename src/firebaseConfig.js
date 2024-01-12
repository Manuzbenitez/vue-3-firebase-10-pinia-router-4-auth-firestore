import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBO8MR6CqW3dNYlS5894tt5NM6SEWkNa7c",
  authDomain: "vue-3-firebase2023.firebaseapp.com",
  projectId: "vue-3-firebase2023",
  storageBucket: "vue-3-firebase2023.appspot.com",
  messagingSenderId: "670381094300",
  appId: "1:670381094300:web:7f1205946ac49c6c004459"
};

initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export { auth, db }