import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const RandomPlayers = () => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.quickButton}>
          <Text style={{ color: "white", fontSize: 18 }}>دقة ولد سريعة</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.playersNamesContainer}></View>
    </>
  );
};
const styles = StyleSheet.create({
  quickButton: {
    margin: 20,
    backgroundColor: "#004582",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
  },
  playersNamesContainer: {},
});

export default RandomPlayers;
