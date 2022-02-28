import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import quickRandomPlayersScreen from "../screens/quickRandomPlayersScreen";
import RandomPlayersScreen from "../screens/RandomPlayersScreen";
const Stack = createStackNavigator();
const RandomPlayersNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="تحديد التيم"
          component={RandomPlayersScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="دقة ولد سريعة"
          component={quickRandomPlayersScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default RandomPlayersNavigator;
