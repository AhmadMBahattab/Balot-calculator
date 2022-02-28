import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Input, Button, FAB } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
            size="large"
            color="#004582"
            onPress={addPlayer}
          />
        </View>
      </View>
      <ScrollView style={styles.playersNames}>
        {playersArray.map((item) => (
          <View style={styles.singlePlayerContainer}>
            <View>
              <Text style={{ fontSize: 18, marginTop: 5 }}>
                {item.id} : {item.name}
              </Text>
            </View>

            <View>
              <FAB
                icon={{ name: "delete", color: "white" }}
                size="small"
                color="red"
              />
            </View>
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
    paddingTop: 30,
    paddingBottom: 30,
    height: windowHeight / 2.5,
  },
  singlePlayerContainer: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  setTeamsButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default RandomPlayers;
