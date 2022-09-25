
import React, { useState, useEffect } from 'react';
import { Button, TextInput, Text } from 'react-native';
//import firebase from './Firebase';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import PhoneNumber from './screens/PhoneNumber';
import Authenticated from './screens/Navigators/StackNavigator/Home';
import Main from './screens/Main';
import VerifyCode from './screens/VerifyCode'
let config = {
  appId: '1:54746695203:android:5ced4231836dfab3379396',
  apiKey: "AIzaSyAIDXQtJkV1Zk3qgjIB-WCa-n97CbdmeAU",
  authDomain: "myproject3-e7c61.firebaseapp.com",
  databaseURL: "https://myproject3-e7c61.firebaseio.com",
  projectId: "myproject3-e7c61",
  storageBucket: "myproject3-e7c61.appspot.com",
  messagingSenderId: "54746695203"
};
firebase.initializeApp(config);



const App =() => {
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }

  async function confirmVerificationCode(code) {
    try {
      await confirm.confirm(code);
      setConfirm(null);
    } catch (error) {
      alert('Invalid code');
    }
  }

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })

  if (authenticated) return <Main />;

  if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

  return <PhoneNumber onSubmit={signIn} />;
}


export default App;