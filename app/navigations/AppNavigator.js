import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../screens/MainScreen";
import RandomPlayersScreen from "../screens/RandomPlayersScreen";
import CustomDrawer from "../components/CustomDrawer";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import RandomPlayersNavigator from "./RandomPlayersNavigator";
import BalotGamesHistory from "../screens/BalotGamesHistory";

const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: darkMode ? "black" : "#004582" }}
      />
      <StatusBar backgroundColor={darkMode ? "black" : "#004582"} />
      <Drawer.Navigator
        backBehavior="order"
        drawerContent={(props) => (
          <CustomDrawer {...props} darkMode={darkMode} />
        )}
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
          // component={() => {
          //   return <MainScreen darkMode={darkMode} setdarkMode={setdarkMode} />;
          // }}
          options={{
            headerStyle: {
              backgroundColor: darkMode ? "black" : "#004582",
            },
            headerTitleStyle: { color: "white", fontSize: 20 },
            drawerIcon: () => (
              <AntDesign name="home" size={24} color={"white"} />
            ),
            drawerLabelStyle: { color: "white", fontSize: 18 },
            // drawerActiveBackgroundColor: "white",
            drawerActiveTintColor: "white",
          }}
        >
          {() => <MainScreen darkMode={darkMode} setdarkMode={setdarkMode} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="دقة الولد"
          // component={RandomPlayersNavigator}
          options={{
            headerStyle: {
              backgroundColor: darkMode ? "black" : "#004582",
            },
            headerTitleStyle: { color: "white", fontSize: 20 },
            drawerIcon: () => (
              <FontAwesome name="random" size={24} color="white" />
            ),
            drawerLabelStyle: { color: "white", fontSize: 18 },
            // drawerActiveBackgroundColor: "white",
            drawerActiveTintColor: "white",
          }}
        >
          {() => <RandomPlayersNavigator darkMode={darkMode} />}
          {/* {() => (
            <RandomPlayersNavigator
              darkMode={darkMode}
              setdarkMode={setdarkMode}
            />
          )} */}
        </Drawer.Screen>
        {/* <Drawer.Screen
        name="Settings"
        component={RandomPlayersNavigator}
        options={{
          headerStyle: {
            backgroundColor: "#004582",
          },
          headerTitleStyle: { color: "white", fontSize: 20 },
          drawerIcon: () => (
            <FontAwesome name="random" size={24} color="white" />
          ),
          drawerLabelStyle: { color: "white", fontSize: 18 },
          // drawerActiveBackgroundColor: "white",
          drawerActiveTintColor: "white",
        }}
      /> */}

        {/* <Drawer.Screen
        name="الصكات المحفوظة"
        component={BalotGamesHistory}
        options={{
          headerStyle: {
            backgroundColor: "#004582",
          },
          headerTitleStyle: { color: "white" },
          drawerIcon: () => <Fontisto name="history" size={24} color="black" />,
        }}
      /> */}
      </Drawer.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  drawerButton: {
    padding: 10,
  },
});

export default AppNavigator;
