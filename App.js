import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, View, Text, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigations/AppNavigator";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
