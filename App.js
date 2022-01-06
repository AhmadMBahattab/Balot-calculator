import React, { useState } from "react";
import NavBar from "./app/components/NavBar";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { FAB } from "react-native-elements";
import ScoresInput from "./app/components/ScoresInput";

const statusBarHight = StatusBar.currentHeight;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const scoresArray = [];
export default function App() {
  const [firstTeamScoreArray, setfirstTeamScoreArray] = useState([0]);
  const [secondTeamScoreArray, setsecondTeamScoreArray] = useState([0]);

  const [firstPoint, setfirstPoint] = useState(0);
  const [secondPoint, setsecondPoint] = useState(0);

  const [lastSubmitedNum1, setlastSubmitedNum1] = useState(0);
  const [lastSubmitedNum2, setlastSubmitedNum2] = useState(0);

  const totalBeforLastScore = (array) => {
    let total = 0;
    for (let i = 0; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  };

  const addScore = (firstTeamPoint, secondTeamPoint) => {
    let firstTeamArray = [...firstTeamScoreArray];
    let secondTeamArray = [...secondTeamScoreArray];

    if (!firstTeamPoint || !secondTeamPoint) {
      alert("حط 0 على الاقل , لا تخلي اي نتيجه فاضي");
      return;
    }
    let num1 = parseInt(firstTeamPoint);
    let num2 = parseInt(secondTeamPoint);

    setlastSubmitedNum1(num1);
    setlastSubmitedNum2(num2);

    firstTeamArray.push(num1);
    secondTeamArray.push(num2);
    setfirstTeamScoreArray(firstTeamArray);
    setsecondTeamScoreArray(secondTeamArray);

    let total1 = 0;
    for (let i = 0; i < firstTeamArray.length; i++) {
      total1 += firstTeamArray[i];
    }
    setfirstPoint(total1);

    let total2 = 0;
    for (let i = 0; i < secondTeamArray.length; i++) {
      total2 += secondTeamArray[i];
    }
    setsecondPoint(total2);
  };

  return (
    <View style={styles.container}>
      <NavBar />
      <ScoresInput
        firstPoint={firstPoint}
        secondPoint={secondPoint}
        addScore={addScore}
      />

      <ScrollView style={styles.scoresContainer}>
        <View style={styles.singleScoreContainer}>
          <View style={styles.singleScoreInfo}>
            <Text>{totalBeforLastScore(firstTeamScoreArray)} +</Text>
            <Text>{firstTeamScoreArray[firstTeamScoreArray.length - 1]}</Text>
            <Text>......</Text>
            <Text>{firstPoint}</Text>
          </View>

          <Text></Text>

          <View style={styles.singleScoreInfo}>
            <Text>{totalBeforLastScore(secondTeamScoreArray)} +</Text>
            <Text>{secondTeamScoreArray[secondTeamScoreArray.length - 1]}</Text>
            <Text>......</Text>
            <Text>{secondPoint}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoresContainer: {
    padding: 20,
    backgroundColor: "#E8E8E8",
  },
  singleScoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  singleScoreInfo: {
    backgroundColor: "white",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
});
