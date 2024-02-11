
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC-6QFgcIrGi92UsrLhGYJplhUEIhte2Bs",
  authDomain: "fir-9820f.firebaseapp.com",
  projectId: "fir-9820f",
  storageBucket: "fir-9820f.appspot.com",
  messagingSenderId: "370770272192",
  appId: "1:370770272192:web:b86c7f7eff87af299eb225",
  measurementId: "G-0M00YGJ7VW"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export{app,auth};
//npm  firebase react-router-dom