import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../screens/MainScreen";
import RandomPlayers from "../screens/RandomPlayers";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <MaterialCommunityIcons
            name="menu"
            size={24}
            color="white"
            onPress={navigation.toggleDrawer}
          />
        ),
      })}
    >
      <Drawer.Screen
        name="الحاسبة"
        component={MainScreen}
        options={{
          headerStyle: {
            backgroundColor: "#004582",
          },
          headerTitleStyle: { color: "white" },
          drawerIcon: () => <AntDesign name="home" size={20} />,
        }}
      />
      <Drawer.Screen
        name="دقة الولد"
        component={RandomPlayers}
        options={{
          headerStyle: {
            backgroundColor: "#004582",
          },
          headerTitleStyle: { color: "white" },
          drawerIcon: () => (
            <FontAwesome name="random" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
