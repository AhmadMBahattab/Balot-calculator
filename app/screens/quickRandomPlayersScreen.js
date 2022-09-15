import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Overlay, FAB } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import RandomTeamsContainer from "../components/randomTeamsContainer";
import { BackgroundImage } from "react-native-elements/dist/config";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Background = require("../assets/2222.png");

const QuickRandomPlayersScreen = ({ darkMode }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [playersArray, setplayersArray] = useState([]);
  const [teams, setteams] = useState([]);
  const [playersNumber, setplayersNumber] = useState(0);

  const addPlayer = () => {
    if (playersNumber >= 10) return;
    setplayersNumber(playersNumber + 1);
  };
  const deletePlayer = () => {
    if (playersNumber <= 0) return;
    setplayersNumber(playersNumber - 1);
  };
  const setTeamsRandom = () => {
    let randomTeams = [];
    let newArray = [];
    let player = "";
    let i = 1;

    for (let i = 1; i <= playersNumber; i++) {
      newArray.push({ id: Date.now(), name: i });
    }

    let random = Math.floor(Math.random() * newArray.length);

    while (i <= 4) {
      random = Math.floor(Math.random() * newArray.length);
      player = newArray[random];
      if (randomTeams.includes(player) === false) {
        randomTeams.push(player);
        i++;
      }
    }

    setteams(randomTeams);
    setVisible(!visible);
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={{ backgroundColor: darkMode ? "black" : "white", flex: 1 }}>
      {/* <ImageBackground
        source={Background}
        style={{ width: "100%", height: "100%" }}
        imageStyle={{ resizeMode: "repeat" }}
      > */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 70,
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        <Text style={{ fontSize: 22, color: darkMode ? "white" : "black" }}>
          عدد اللاعبين
        </Text>
      </View>
      <View
        style={[
          styles.playersNumberContainer,
          { backgroundColor: darkMode ? "black" : null },
        ]}
      >
        <View style={styles.playersNumber}>
          <View style={styles.singleComponent}>
            <FAB
              icon={{ name: "add", color: darkMode ? "black" : "white" }}
              size="small"
              color={darkMode ? "white" : "#004582"}
              onPress={addPlayer}
            />
          </View>
          <View
            style={[
              styles.number,
              { backgroundColor: darkMode ? "white" : "#EFEFEF" },
            ]}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {playersNumber}
            </Text>
          </View>
          <View style={styles.singleComponent}>
            <FAB
              icon={{ name: "cancel", color: darkMode ? "black" : "white" }}
              size="small"
              color={darkMode ? "white" : "red"}
              onPress={deletePlayer}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.setTeamsButtonContainer,
          { backgroundColor: darkMode ? "black" : "white" },
        ]}
      >
        <TouchableOpacity
          onPress={setTeamsRandom}
          disabled={playersNumber < 4 ? true : false}
        >
          <View
            style={[
              styles.chooseTeamesButton,
              {
                backgroundColor:
                  darkMode == false && playersNumber < 4
                    ? "#496883"
                    : darkMode == false && playersNumber >= 4
                    ? "#004582"
                    : darkMode == true && playersNumber < 4
                    ? "#CBCBCB"
                    : darkMode == true && playersNumber >= 4
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
      <Overlay isVisible={visible} style={{ backgroundColor: "red" }}>
        <RandomTeamsContainer teams={teams} toggleOverlay={toggleOverlay} />
      </Overlay>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  playersNumberContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  playersNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    borderRadius: 20,
  },
  singleComponent: {
    margin: 15,
  },
  number: {
    padding: 30,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 40,
  },
  setTeamsButtonContainer: {},
  chooseTeamesButton: {
    backgroundColor: "#004512",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
    marginLeft: windowWidth / 8,
    marginRight: windowWidth / 8,
  },
});

export default QuickRandomPlayersScreen;
