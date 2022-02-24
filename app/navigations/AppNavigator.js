import React from "react";
import App from "../../App";
import { View, Text } from "react-native";

import { createDrawerNavigator } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={App}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default AppNavigator;
