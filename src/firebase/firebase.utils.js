import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAbNkjQpTS7W8chM87lPf_xggXAxdHf3Dk",
    authDomain: "clothing-store-react-efe50.firebaseapp.com",
    databaseURL: "https://clothing-store-react-efe50.firebaseio.com",
    projectId: "clothing-store-react-efe50",
    storageBucket: "clothing-store-react-efe50.appspot.com",
    messagingSenderId: "2454675030",
    appId: "1:2454675030:web:ae6fd758de95e3137465f7",
    measurementId: "G-5HMCRE583E"
};

Firebase.initializeApp(config);

export const auth = Firebase.auth();
export const firestore = Firebase.firestore();

const googleAuthProvider = new Firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default Firebase;