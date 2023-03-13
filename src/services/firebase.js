import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut,signInWithEmailAndPassword,NextOrObserver,User, createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirebaseConfig } from './firebase-config';

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);


export const signInUser = async (email, password) => {
  if (!email && !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const userStateListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}

export const register = async(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}

export const SignOutUser = async () => await signOut(auth);