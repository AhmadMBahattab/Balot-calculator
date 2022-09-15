import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuickRandomPlayersScreen from "../screens/quickRandomPlayersScreen";
import RandomPlayersScreen from "../screens/RandomPlayersScreen";
import { Ionicons } from "@expo/vector-icons";
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
          options={{
            headerBackTitleStyle: {
              color: darkMode ? "white" : null,
              fontWeight: "bold",
            },
            headerStyle: { backgroundColor: darkMode ? "black" : "white" },

            headerBackImage: () => (
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={darkMode ? "white" : "black"}
              />
            ),
            headerBackTitle: "تراجع",
            headerTitle: " ",
          }}
          // component={quickRandomPlayersScreen}
        >
          {() => <QuickRandomPlayersScreen darkMode={darkMode} />}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default RandomPlayersNavigator;
