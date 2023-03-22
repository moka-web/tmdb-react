import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut,signInWithEmailAndPassword,NextOrObserver,User, createUserWithEmailAndPassword} from 'firebase/auth';
import swal from 'sweetalert';
import { getFirebaseConfig } from './firebase-config';

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);


export const signInUser = async (email, password) => {
  if (!email && !password) return;
  try {
    
    return await signInWithEmailAndPassword(auth, email, password)
    
  } catch (error) {
    swal("las credenciales no son validas! ")
    swal("oops!", "las credenciales no son validas!", "error", {
      button: "prueba de nuevo",
    });
  }
}

export const userStateListener = (callback) => {
  try {
    return onAuthStateChanged(auth, callback)
    
  } catch (error) {
    console.log(error.message)
  }
}

export const register = async(email,password)=>{

  try {
    return await createUserWithEmailAndPassword(auth,email,password)
    
  } catch (error) {
    swal(`${error.message}`,"oops","error")
  }
  
}

export const SignOutUser = async () => await signOut(auth);