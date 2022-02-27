import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input, Button, FAB } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const RandomPlayers = () => {
  const [playersArray, setplayersArray] = useState([]);
  const [playerName, setplayerName] = useState("");
  const addPlayer = () => {
    const newArray = [...playersArray];

    if (playerName.length < 1) {
      return;
    }
    
  };
  console.log(1 + " " + playerName);
  return (
    <>
      <TouchableOpacity>
        <View style={styles.quickButton}>
          <Text style={{ color: "white", fontSize: 18 }}>دقة ولد سريعة</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.playersNamesContainer}>
        <View style={{ width: "80%" }}>
          <Input
            placeholder="الاسم..."
            textAlign="right"
            style={{ color: "gray" }}
            onChangeText={(name) => {
              setplayerName(name);
            }}
            maxLength={15}
          />
        </View>

        <View style={styles.addNameContainer}>
          <FAB
            icon={{ name: "add", color: "white" }}
            size="small"
            color="#004582"
            onPress={addPlayer}
          />
        </View>
      </View>
      <View style={styles.playersNames}></View>
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
  playersNamesContainer: {
    flexDirection: "row",
    padding: 10,
  },
  addNameContainer: {
    justifyContent: "center",
  },
});

export default RandomPlayers;
