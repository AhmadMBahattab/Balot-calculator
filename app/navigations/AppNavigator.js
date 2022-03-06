import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../screens/MainScreen";
import RandomPlayersScreen from "../screens/RandomPlayersScreen";
import CustomDrawer from "../components/CustomDrawer";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import RandomPlayersNavigator from "./RandomPlayersNavigator";

const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <TouchableWithoutFeedback onPress={navigation.toggleDrawer}>
            <View style={styles.drawerButton}>
              <MaterialCommunityIcons name="menu" size={30} color="white" />
            </View>
          </TouchableWithoutFeedback>
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
        component={RandomPlayersNavigator}
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

const styles = StyleSheet.create({
  drawerButton: {
    padding: 10,
  },
});

export default AppNavigator;
