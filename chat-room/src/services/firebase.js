// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loginWithGoogle() {
  try {
    //generate credential
    const provider = new GoogleAuthProvider();
    //get firebase auth instance
    const auth = getAuth();

    const { user } = await signInWithPopup(auth, provider);

    return { uid: user.uid, displayName: user.displayName};
  } catch(error) {
    if (error.code !== 'auth/cancelled-popup-request') {
        console.error(error);
    }

    return null;
  }
}
//more info about firebase auth - https://firebase.google.com/docs/auth/web/start

//Call addDoc function will add data to collection with initialize firestore collection.
//최초 호출하면 firestore의 collection을 초기화함과 동시에 collection에 데이터를 넣는다.
async function sendMessage(roomId, user, text) {
  try {
    //db의 chat-room의 roo
    await addDoc(collection(db, 'chat-rooms', roomId, 'message'), {
      uid: user.uid,
      displayName: user.displayName,
      text: text.trim(),
      //for chat 
      timestamp: serverTimestamp(),
    })
  }catch(error) {
    console.error(error);
  }
}

export { loginWithGoogle, sendMessage }