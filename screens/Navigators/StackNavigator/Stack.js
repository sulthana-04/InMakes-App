import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import About from './About';
import Settings from "./Settings";
import Contact from "./Contact";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown:false,
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, ContactStackNavigator };