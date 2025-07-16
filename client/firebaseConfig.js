import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeT2P6_zBuk3rq1rM1xxeD-Gys_cmCFNo",
  authDomain: "gadmi-esports-site.firebaseapp.com",
  projectId: "gadmi-esports-site",
  storageBucket: "gadmi-esports-site.firebasestorage.app",
  messagingSenderId: "100809843811",
  appId: "1:100809843811:web:0f88699669afaa6c4bc456"
};

const app = initializeApp(firebaseConfig);
export default app;
