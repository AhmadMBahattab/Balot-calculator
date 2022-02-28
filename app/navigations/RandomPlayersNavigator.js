import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import quickRandomPlayersScreen from "../screens/quickRandomPlayersScreen";
import RandomPlayers from "../screens/RandomPlayers";
const Stack = createStackNavigator();
const RandomPlayersNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="تحديد التيم "
          component={RandomPlayers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="دقة ولد سريعة"
          component={quickRandomPlayersScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RandomPlayersNavigator;
