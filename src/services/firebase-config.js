
const config = {
  apiKey: "AIzaSyCD0qOUl2h8VNW9GCHujwdRbcR9Z4n17Dg",
  authDomain: "login-tmdb.firebaseapp.com",
  projectId: "login-tmdb",
  storageBucket: "login-tmdb.appspot.com",
  messagingSenderId: "801687022528",
  appId: "1:801687022528:web:bcfa98d85870e24d793625"
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +'Add your web app\'s configuration object to firebase-config.ts');
    } else {
      return config;
    }
  }    



