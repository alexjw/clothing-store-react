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

export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if(!userAuth)
        return;

    const ref = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await ref.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await ref.set({
                displayName,
                email,
                createdAt,
                ...aditionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }

    return ref;
};

Firebase.initializeApp(config);

export const addCollectionAndDocuments = async (key, documents) => {
    const collectionReference = firestore.collection(key);

    const batch = firestore.batch();    // = transaction
    documents.forEach(obj => {
        const newDocRef = collectionReference.doc(); // new Empty doc
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {});

};

export const auth = Firebase.auth();
export const firestore = Firebase.firestore();

export const googleAuthProvider = new Firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default Firebase;