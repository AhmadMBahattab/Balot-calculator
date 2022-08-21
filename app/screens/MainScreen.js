import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  ToastAndroid,
  Text,
  ImageBackground,
  Alert,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useKeyboard } from "@react-native-community/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAB } from "react-native-elements";
import * as Localization from "expo-localization";

import NavBar from "../components/NavBar";
import ScoresInput from "../components/ScoresInput";
import ScoresStatusBar from "../components/ScoresStatusBar";
import ScoresContainer from "../components/ScoresContainer";
import ResetComponent from "../components/ResetComponent";

const background = require("../assets/2222.png");
const MainScreen = () => {
  const [visible, setVisible] = useState(true);
  const [firstTeamScoreArray, setfirstTeamScoreArray] = useState([0]);
  const [secondTeamScoreArray, setsecondTeamScoreArray] = useState([0]);

  const [firstPoint, setfirstPoint] = useState(0);
  const [secondPoint, setsecondPoint] = useState(0);
  const [remainWinScore, setremainWinScore] = useState(152);

  const [combinedScores, setcombinedScores] = useState([]);

  const navigation = useNavigation();
  const keyboard = useKeyboard();

  useEffect(async () => {
    loadScore();
  }, []);

  const resetScores = async () => {
    setcombinedScores([]);
    setfirstTeamScoreArray([0]);
    setsecondTeamScoreArray([0]);
    setfirstPoint(0);
    setsecondPoint(0);
    setVisible(true);
    setremainWinScore(152);
    const keys = [
      "firstTeamArray",
      "secondTeamArray",
      "firstTeamPoints",
      "SecondTeamsPoint",
      "savedScore",
      "remainTeamsScore",
    ];
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      // remove error
    }

    console.log("Clear storage done!!");
  };

  const backOneStep = () => {
    let firstTeamArray = [...firstTeamScoreArray];
    let secondTeamArray = [...secondTeamScoreArray];
    let combinedTeamsScore = [...combinedScores];

    if (combinedScores.length > 1) {
      firstTeamArray.pop();
      secondTeamArray.pop();
      combinedTeamsScore.pop();

      setfirstTeamScoreArray(firstTeamArray);
      setsecondTeamScoreArray(secondTeamArray);
      setcombinedScores(combinedTeamsScore);

      setfirstPoint(totalLastScoreA(firstTeamArray));
      setsecondPoint(totalLastScoreB(secondTeamArray));

      calculatRemainScore(
        totalLastScoreA(firstTeamArray),
        totalLastScoreB(secondTeamArray)
      );

      saveScores(
        combinedTeamsScore,
        firstTeamArray,
        secondTeamArray,
        totalLastScoreA(firstTeamArray),
        totalLastScoreB(secondTeamArray),
        calculatRemainScore(
          totalLastScoreA(firstTeamArray),
          totalLastScoreB(secondTeamArray)
        )
      );
      return;
    }
    if (combinedScores.length <= 1) {
      resetScores();
    }
    return;
  };

  const totalLastScoreA = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    // total = total + array[array.length - 1];
    return total;
  };
  const totalLastScoreB = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }

    return total;
  };

  const totalBeforLastScoreA = (array) => {
    let total = 0;
    for (let i = 0; i < array.length - 1; i++) {
      total += array[i];
    }

    return total;
  };
  const totalBeforLastScoreB = (array) => {
    let total = 0;
    for (let i = 0; i < array.length - 1; i++) {
      total += array[i];
    }

    return total;
  };
  const calculatRemainScore = (total1, total2) => {
    if (total1 > total2) {
      setremainWinScore(152 - total1);
      return 152 - total1;
    }
    if (total2 > total1) {
      setremainWinScore(152 - total2);
      return 152 - total2;
    }
    if (total1 == total2) {
      setremainWinScore(152 - total2);
      return 152 - total2;
    }
  };

  const addScore = (firstTeamPoint, secondTeamPoint) => {
    const checkNumber = new RegExp("^[0-9]+$");
    let firstTeamArray = [...firstTeamScoreArray];
    let secondTeamArray = [...secondTeamScoreArray];
    let combinedTeamsScore = [...combinedScores];
    if (firstTeamPoint == "" && secondTeamPoint == "") {
      return console.log("nothing");
    }

    if (firstTeamPoint !== " " && firstTeamPoint.length > 0) {
      let firstCharecter = firstTeamPoint.split("")[0];
      if (
        firstCharecter == "," ||
        firstCharecter == "." ||
        firstCharecter == "-" ||
        firstCharecter == " " ||
        !checkNumber.test(firstCharecter)
      ) {
        if (Platform.OS == "ios") {
          console.log();
          Alert.alert("مدخل خاطئ", " لا تقبل الارقام العربية او الرموز");
        }
        if (Platform.OS == "android") {
          ToastAndroid.show(`مدخل خاطئ  ${firstTeamPoint}`, ToastAndroid.SHORT);
        }

        Keyboard.dismiss();

        return console.log("Wrong input ", firstCharecter);
      }
    }

    if (secondTeamPoint !== " " && secondTeamPoint.length > 0) {
      let firstCharecter = secondTeamPoint.split("")[0];
      if (
        firstCharecter == "," ||
        firstCharecter == "." ||
        firstCharecter == "-" ||
        firstCharecter == " " ||
        !checkNumber.test(firstCharecter)
      ) {
        if (Platform.OS == "ios") {
          console.log(firstCharecter);
          Alert.alert("مدخل خاطئ", " لا تقبل الارقام العربية او الرموز");
        }
        if (Platform.OS == "android") {
          ToastAndroid.show(`مدخل خاطئ  ${firstTeamPoint}`, ToastAndroid.SHORT);
        }

        Keyboard.dismiss();

        return console.log("tryeee");
      }
    }

    if (firstTeamPoint == "") {
      firstTeamPoint = 0;
    }
    if (secondTeamPoint == "") {
      secondTeamPoint = 0;
    }

    let num1 = parseInt(firstTeamPoint);
    let num2 = parseInt(secondTeamPoint);

    firstTeamArray.push(num1);
    secondTeamArray.push(num2);

    let points = {
      teamA: num1,
      teamB: num2,
      totalA: totalLastScoreA(firstTeamArray),
      totalB: totalLastScoreB(secondTeamArray),
      lastTotalA: totalBeforLastScoreA(firstTeamArray),
      lastTotalB: totalBeforLastScoreB(secondTeamArray),
    };
    combinedTeamsScore.push(points);
    setfirstTeamScoreArray(firstTeamArray);
    setsecondTeamScoreArray(secondTeamArray);
    setcombinedScores(combinedTeamsScore);

    setfirstPoint(totalLastScoreA(firstTeamArray));
    setsecondPoint(totalLastScoreB(secondTeamArray));

    calculatRemainScore(
      totalLastScoreA(firstTeamArray),
      totalLastScoreB(secondTeamArray)
    );
    Keyboard.dismiss();
    saveScores(
      combinedTeamsScore,
      firstTeamArray,
      secondTeamArray,
      totalLastScoreA(firstTeamArray),
      totalLastScoreB(secondTeamArray),
      calculatRemainScore(
        totalLastScoreA(firstTeamArray),
        totalLastScoreB(secondTeamArray)
      )
    );
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const saveScores = async (
    teamesScoresToSave,
    firstTeamArray,
    secondTeamArray,
    firstTeamPoints,
    secondTeamPoints,
    remainScore
  ) => {
    try {
      const combinedTeamsScore = JSON.stringify(teamesScoresToSave);
      const firstTeamArr = JSON.stringify(firstTeamArray);
      const secondTeamArr = JSON.stringify(secondTeamArray);

      await AsyncStorage.setItem("savedScore", combinedTeamsScore);
      await AsyncStorage.setItem("firstTeamArray", firstTeamArr);
      await AsyncStorage.setItem("secondTeamArray", secondTeamArr);
      await AsyncStorage.setItem("remainTeamsScore", remainScore.toString());
      await AsyncStorage.setItem("firstTeamPoints", firstTeamPoints.toString());
      await AsyncStorage.setItem(
        "SecondTeamsPoint",
        secondTeamPoints.toString()
      );
    } catch (error) {
      alert(error);
    }
  };
  const loadScore = async () => {
    try {
      let loadedScore = await AsyncStorage.getItem("savedScore");
      let AteamArray = await AsyncStorage.getItem("firstTeamArray");
      let BteamArray = await AsyncStorage.getItem("secondTeamArray");
      let AteamPoints = await AsyncStorage.getItem("firstTeamPoints");
      let BteamPoints = await AsyncStorage.getItem("SecondTeamsPoint");
      let remainTeamsScore = await AsyncStorage.getItem("remainTeamsScore");

      if (
        loadedScore !== null &&
        AteamArray !== null &&
        BteamArray !== null &&
        AteamPoints !== null &&
        BteamPoints !== null
      ) {
        const combinedScore = JSON.parse(loadedScore);
        const AteamScoreArr = JSON.parse(AteamArray);
        const BteamScoreArr = JSON.parse(BteamArray);
        setcombinedScores(combinedScore);
        setfirstTeamScoreArray(AteamScoreArr);
        setsecondTeamScoreArray(BteamScoreArr);
        setfirstPoint(AteamPoints);
        setsecondPoint(BteamPoints);
        setremainWinScore(remainTeamsScore);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {totalLastScoreA(firstTeamScoreArray) >= 152 ||
      totalLastScoreB(secondTeamScoreArray) >= 152 ? (
        <>
          <ResetComponent
            visible={visible}
            resetScores={resetScores}
            toggleOverlay={toggleOverlay}
          />
        </>
      ) : null}
      {/* <ImageBackground
        source={background}
        style={{ width: "100%", height: 1000, opacity: 1 }}
        resizeMode="repeat"
        imageStyle={{ opacity: 0.1 }}
      > */}
      <View style={styles.container}>
        <NavBar resetScores={resetScores} backOneStep={backOneStep} />
        <ScoresInput
          firstPoint={firstPoint}
          secondPoint={secondPoint}
          remainWinScore={remainWinScore}
          addScore={addScore}
        />
        {/* <ScoresStatusBar /> */}
        <ScoresContainer combinedScores={combinedScores} />
        {combinedScores.length === 0 && keyboard.keyboardShown == false ? (
          <View style={styles.randomPlayersButton}>
            <FAB
              visible={visible}
              title="دقة ولد "
              upperCase
              icon={<FontAwesome name="random" size={22} color="white" />}
              color={"#004582"}
              onPress={() => {
                navigation.navigate("دقة الولد");
              }}
            />
            <Text></Text>
          </View>
        ) : null}
      </View>
      {/* </ImageBackground> */}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  randomPlayersButton: {
    margin: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default MainScreen;
