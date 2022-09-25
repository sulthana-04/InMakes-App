import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAIDXQtJkV1Zk3qgjIB-WCa-n97CbdmeAU",
    authDomain: "myproject3-e7c61.firebaseapp.com",
    //databaseURL: "XXXXX",
    projectId: "myproject3-e7c61",
    storageBucket: "myproject3-e7c61.appspot.com",
    messagingSenderId: "54746695203"
};
firebase.initializeApp(config);

export default firebase;