import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScoresStatusBar = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.singleStatus}>
          <Text style={{ fontSize: 20 }}>الجولة </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",

    borderBottomColor: "#EBECEB",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  singleStatus: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
});

export default ScoresStatusBar;
