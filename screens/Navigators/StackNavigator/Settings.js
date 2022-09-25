
import React from 'react'
import { StyleSheet, Text, View, Button,style } from 'react-native';
import auth from '@react-native-firebase/auth';

const Settings = (navigation) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Press the button to Logout!</Text>
      
      <View style={{ marginTop: 30 }}>
        <Button title="LogOut" onPress={() => auth().signOut()} />
      </View>
    </View>
  )
}

export default Settings;
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      borderWidth: 2,
      borderColor: 'lightblue',
      width: 300,
      marginVertical: 30,
      fontSize: 25,
      padding: 10,
      borderRadius: 8,
    },
    text: {
      fontSize: 25,
    },
    phoneNumber: {
      fontSize: 21,
      marginTop: 20,
    },
  });
  
  