import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY!,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.GATSBY_FIREBASE_APP_ID!
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };

