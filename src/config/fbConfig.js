import firebase from 'firebase/app' //필요한것만 가져옴
import 'firebase/firestore' //database
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAjPf2ppyB363kci2CuIzqyQoxXaZTBu44",
	authDomain: "net-jehong-marioplan.firebaseapp.com",
	databaseURL: "https://net-jehong-marioplan.firebaseio.com",
	projectId: "net-jehong-marioplan",
	storageBucket: "",
	messagingSenderId: "189247038076",
	appId: "1:189247038076:web:e772b7412b9d6af4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;