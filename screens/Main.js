import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { MainStackNavigator } from "./src/Navigators/StackNavigator/Stack";
//import BottomTabNavigator from "./src/Navigators/TabNavigator/TabNavigator";
import DrawerNavigator from "./Navigators/DrawerNavigator/Drawer";

 const Main = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
export default Main