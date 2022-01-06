import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const statusBarHight = StatusBar.currentHeight;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <View style={styles.navBarInfo}>
        <Text style={{ fontSize: 25, color: "white" }}>حاسبة بلوت الاستو</Text>
        <View style={styles.navBarButtons}>
          <FontAwesome5 name="redo" size={20} color="white" />
          <MaterialCommunityIcons
            name="delete"
            style={{
              fontSize: 24,
              color: "white",
              marginRight: windowWidth / 25,
              marginLeft: windowWidth / 20,
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  navBar: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: "#004582",
    height: statusBarHight * 1.8,
    justifyContent: "flex-end",
  },
  navBarInfo: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navBarButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NavBar;
