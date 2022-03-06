import { View, StyleSheet, Keyboard, ToastAndroid } from "react-native";
import React, { useState, useRef } from "react";
import DropdownAlert from "react-native-dropdownalert";
import NavBar from "../components/NavBar";
import ScoresInput from "../components/ScoresInput";
import ScoresStatusBar from "../components/ScoresStatusBar";
import ScoresContainer from "../components/ScoresContainer";
import ResetComponent from "../components/ResetComponent";

const MainScreen = () => {
  let dropDownAlertRef = useRef();
  const [visible, setVisible] = useState(true);

  const [firstTeamScoreArray, setfirstTeamScoreArray] = useState([0]);
  const [secondTeamScoreArray, setsecondTeamScoreArray] = useState([0]);

  const [firstPoint, setfirstPoint] = useState(0);
  const [secondPoint, setsecondPoint] = useState(0);
  const [remainWinScore, setremainWinScore] = useState(152);

  const [combinedScores, setcombinedScores] = useState([]);

  const resetScores = () => {
    setcombinedScores([]);
    setfirstTeamScoreArray([0]);
    setsecondTeamScoreArray([0]);
    setfirstPoint(0);
    setsecondPoint(0);
    setVisible(true);
    setremainWinScore(152);
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
      return;
    }
    if (total2 > total1) {
      setremainWinScore(152 - total2);
      return;
    }
    if (total1 == total2) {
      setremainWinScore(152 - total2);
      return;
    }
  };

  const addScore = (firstTeamPoint, secondTeamPoint) => {
    let firstTeamArray = [...firstTeamScoreArray];
    let secondTeamArray = [...secondTeamScoreArray];
    let combinedTeamsScore = [...combinedScores];

    if (firstTeamPoint !== " " && firstTeamPoint.length > 0) {
      let firstCharecter = firstTeamPoint.split("")[0];
      if (firstCharecter == "," || firstCharecter == ".") {
        ToastAndroid.show(`مدخل خاطئ  ${firstTeamPoint}`, ToastAndroid.SHORT);
        Keyboard.dismiss();

        return console.log("tryeee");
      }
    }

    if (secondTeamPoint !== " " && secondTeamPoint.length > 0) {
      let firstCharecter = secondTeamPoint.split("")[0];
      if (firstCharecter == "," || firstCharecter == ".") {
        ToastAndroid.show(`مدخل خاطئ  ${secondTeamPoint}`, ToastAndroid.SHORT);
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

    // console.log(num1);
    // console.log(num2);

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
  };
  const toggleOverlay = () => {
    setVisible(!visible);
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
      <View style={styles.container}>
        <NavBar resetScores={resetScores} backOneStep={backOneStep} />
        <ScoresInput
          firstPoint={firstPoint}
          secondPoint={secondPoint}
          remainWinScore={remainWinScore}
          addScore={addScore}
        />
        <ScoresStatusBar />
        <ScoresContainer combinedScores={combinedScores} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
