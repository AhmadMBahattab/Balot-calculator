import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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

    if (playersArray.length >= 10) {
      return;
    }

    newArray.push({
      id: playersArray.length + 1,
      name: playerName,
    });
    setplayerName("");
    setplayersArray(newArray);
    console.log(playersArray.length);
  };

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
            value={playerName}
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
      <ScrollView style={styles.playersNames}>
        {playersArray.map((item) => (
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text>ss</Text>
            <Text style={{ fontSize: 20, marginTop: 5 }}>
              {item.id} : {item.name}
            </Text>
            <View></View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.setTeamsButtonContainer}>
        <TouchableOpacity>
          <View style={styles.quickButton}>
            <Text style={{ color: "white", fontSize: 18 }}>دقة الولد</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  playersNames: {
    padding: 20,
  },
  setTeamsButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default RandomPlayers;
