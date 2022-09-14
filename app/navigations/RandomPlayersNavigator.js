import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuickRandomPlayersScreen from "../screens/quickRandomPlayersScreen";
import RandomPlayersScreen from "../screens/RandomPlayersScreen";
const Stack = createStackNavigator();
const RandomPlayersNavigator = ({ darkMode }) => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="تحديد التيم"
          // component={RandomPlayersScreen}
          options={{ headerShown: false }}
        >
          {() => <RandomPlayersScreen darkMode={darkMode} />}
        </Stack.Screen>
        <Stack.Screen
          name="دقة ولد سريعة"
          // component={quickRandomPlayersScreen}
        >
          {() => <QuickRandomPlayersScreen darkMode={darkMode} />}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default RandomPlayersNavigator;
