import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Input, FAB, Overlay } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import RandomTeamsContainer from "../components/randomTeamsContainer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RandomPlayersScreen = ({ darkMode }) => {
  console.log(darkMode);
  const [playersArray, setplayersArray] = useState([]);
  const [playerName, setplayerName] = useState("");
  const [visible, setVisible] = useState(false);
  const [teams, setteams] = useState([]);
  const navigation = useNavigation();

  const addPlayer = () => {
    const newArray = [...playersArray];

    if (playerName.length < 1) return;

    if (playersArray.length >= 10) return;

    newArray.push({
      id: Date.now(),
      name: playerName,
    });
    setplayerName("");
    setplayersArray(newArray);
    console.log(playersArray.length);
  };

  const deletePlayer = (player) => {
    let newArray = [...playersArray];
    console.log(player);
    newArray = newArray.filter((value) => {
      return value.id != player.id;
    });
    setplayersArray(newArray);
  };

  const setTeamsRandom = () => {
    let randomTeams = [];
    let newArray = [...playersArray];
    let player = "";
    let i = 1;

    let random = Math.floor(Math.random() * newArray.length);

    while (i <= 4) {
      random = Math.floor(Math.random() * newArray.length);
      player = newArray[random];
      if (randomTeams.includes(player) === false) {
        randomTeams.push(player);
        i++;
      }
      console.log(player);
    }

    console.log(122, randomTeams);
    setteams(randomTeams);
    setVisible(!visible);
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View
      style={{
        height: windowHeight / 1.1,
        backgroundColor: darkMode ? "black" : null,
      }}
    >
      <View
        style={[
          styles.setTeamsButtonContainer,
          { backgroundColor: darkMode ? "black" : null },
        ]}
      >
        <TouchableOpacity
          onPress={setTeamsRandom}
          disabled={playersArray.length < 4 ? true : false}
        >
          <View
            style={[
              styles.chooseTeamesButton,
              {
                backgroundColor:
                  darkMode == false && playersArray.length < 4
                    ? "#496883"
                    : darkMode == false && playersArray.length >= 4
                    ? "#004582"
                    : darkMode == true && playersArray.length < 4
                    ? "#CBCBCB"
                    : darkMode == true && playersArray.length >= 4
                    ? "white"
                    : null,
              },
            ]}
          >
            <Text
              style={{
                color: darkMode ? "black" : "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              دقة الولد
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.playersNamesContainer,
          { backgroundColor: darkMode ? "black" : null },
        ]}
      >
        <View style={{ width: "80%" }}>
          <Input
            placeholder="الاسم..."
            textAlign="right"
            style={{ color: darkMode ? "white" : "gray" }}
            onChangeText={(name) => {
              setplayerName(name);
            }}
            value={playerName}
            maxLength={10}
          />
        </View>

        <View style={styles.addNameContainer}>
          <FAB
            icon={{ name: "add", color: darkMode ? "black" : "white" }}
            size="large"
            color={darkMode ? "white" : "#004582"}
            onPress={addPlayer}
          />
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ color: darkMode ? "white" : "black" }}>
          عدد المشاركين :{" "}
          {
            <Text
              style={{
                fontSize: 16,
                color: darkMode ? "white" : "black",
              }}
            >
              {playersArray.length}
            </Text>
          }
        </Text>
      </View>

      <ScrollView style={styles.playersNames}>
        {playersArray.map((item, index) => (
          <View style={styles.singlePlayerContainer} key={item.id}>
            <View>
              <Text style={{ fontSize: 18, marginTop: 5 }}>{item.name}</Text>
            </View>

            <View>
              <FAB
                icon={{ name: "delete", color: "white" }}
                size="small"
                color={darkMode ? "black" : "red"}
                onPress={() => deletePlayer(item)}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("دقة ولد سريعة");
        }}
      >
        <View
          style={[
            styles.quickButton,
            { backgroundColor: darkMode ? "white" : "#004582" },
          ]}
        >
          <Text style={{ color: darkMode ? "black" : "white", fontSize: 18 }}>
            دقة ولد سريعة
          </Text>
        </View>
      </TouchableOpacity>
      <Overlay isVisible={visible} style={{ backgroundColor: "#004582" }}>
        <RandomTeamsContainer teams={teams} toggleOverlay={toggleOverlay} />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  setTeamsButtonContainer: {
    paddingBottom: 10,
  },
  quickButton: {
    margin: 20,
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
    // height: windowHeight / 2.7,
  },
  singlePlayerContainer: {
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  chooseTeamesButton: {
    margin: 20,
    backgroundColor: "#004512",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
  },
});

export default RandomPlayersScreen;
