import { initializeApp } from "firebase/app";
import { getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider,
        createUserWithEmailAndPassword } from "firebase/auth";
  

const firebaseConfig = {
  apiKey: "AIzaSyDNqmTG5lGgEdOykdEYPCsEsu5H-tZw2f8",
  authDomain: "crwn-v3.firebaseapp.com",
  projectId: "crwn-v3",
  storageBucket: "crwn-v3.firebasestorage.app",
  messagingSenderId: "21439079013",
  appId: "1:21439079013:web:7b3473648d71150d139c8c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signinWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGooglRedirect = () => signInWithRedirect(auth, provider)
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password)return;
    return await createUserWithEmailAndPassword(auth, email, password)
}
