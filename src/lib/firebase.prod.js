import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyCiXuiy4BhfMRaypXi9zFza3j_9fvglZUE",
  authDomain: "twitter-clone-97045.firebaseapp.com",
  databaseURL: "https://twitter-clone-97045.firebaseio.com",
  projectId: "twitter-clone-97045",
  storageBucket: "twitter-clone-97045.appspot.com",
  messagingSenderId: "603625446328",
  appId: "1:603625446328:web:900789139bc67d93dd0d4d",
  measurementId: "G-DF6776MGDZ",
};

const firebase = Firebase.initializeApp(firebaseConfig);

//seedDatabase(firebase);

export { firebase };
