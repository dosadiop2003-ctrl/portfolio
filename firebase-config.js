// firebase-config.js
// Importation des modules Firebase nécessaires
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcJyzDYO4pTv9qaEAtPWbaEhwr2Fi6OOc",
  authDomain: "portfolio-contact-10cfa.firebaseapp.com",
  projectId: "portfolio-contact-10cfa",
  storageBucket: "portfolio-contact-10cfa.firebasestorage.app",
  messagingSenderId: "222450527381",
  appId: "1:222450527381:web:9da5b8e8f9a19dce0dbf9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Récupérer une référence à la base Firestore
export const db = getFirestore(app);
