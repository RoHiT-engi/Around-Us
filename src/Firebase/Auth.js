import {firebaseConfig} from './FireBaseConfig';
import { getAuth,updateProfile,updateEmail,GoogleAuthProvider,signOut,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
let isLogin = auth.currentUser;
const signInWithGoogle = () => {
  if(isLogin === null){
  return signInWithPopup(auth, Provider)
}}

const signUpWithEmailAndPassword = (email,password)=>{
  if(isLogin===null){
  return createUserWithEmailAndPassword(auth, email, password)
}}

const signInWithEmailnPassword = (email,password) =>{
  if(isLogin === null ){
  return signInWithEmailAndPassword(auth, email, password)
}}
const sendPasswordResetinEmail = (email) => {
  if(isLogin === null){
  return  sendPasswordResetEmail(auth, email)
}}


const logout = () => {
  return signOut(auth)
};

export {
  signInWithGoogle,
  signUpWithEmailAndPassword,
  signInWithEmailnPassword,
  sendPasswordResetinEmail,
  logout,
};