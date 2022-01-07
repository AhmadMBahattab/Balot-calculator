import React, { useState } from "react";
import NavBar from "./app/components/NavBar";
import ScoresInput from "./app/components/ScoresInput";
import ScoresContainer from "./app/components/ScoresContainer";
import ResetComponent from "./app/components/ResetComponent";
import { StyleSheet, View } from "react-native";

const scoresArray = [];
export default function App() {
  const [visible, setVisible] = useState(true);

  const [firstTeamScoreArray, setfirstTeamScoreArray] = useState([0]);
  const [secondTeamScoreArray, setsecondTeamScoreArray] = useState([0]);

  const [firstPoint, setfirstPoint] = useState(0);
  const [secondPoint, setsecondPoint] = useState(0);

  const [combinedScores, setcombinedScores] = useState([]);

  const resetScores = () => {
    setcombinedScores([]);
    setfirstTeamScoreArray([0]);
    setsecondTeamScoreArray([0]);
    setfirstPoint(0);
    setsecondPoint(0);
    setVisible(true);
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

      let total1 = 0;
      for (let i = 0; i < firstTeamScoreArray.length - 1; i++) {
        total1 += firstTeamScoreArray[i];
      }
      setfirstPoint(total1);

      let total2 = 0;
      for (let i = 0; i < secondTeamScoreArray.length - 1; i++) {
        total2 += secondTeamScoreArray[i];
      }
      setsecondPoint(total2);
      console.log("1st ", firstPoint);
      console.log("snd ", secondPoint);
      // console.log("f arr ", combinedScores);
      // console.log("f arr ", combinedScores);
      return;
    }
    if (combinedScores.length <= 1) {
      setcombinedScores([]);
      setfirstTeamScoreArray([0]);
      setsecondTeamScoreArray([0]);
      setfirstPoint(0);
      setsecondPoint(0);
      setVisible(true);
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

  const addScore = (firstTeamPoint, secondTeamPoint) => {
    let firstTeamArray = [...firstTeamScoreArray];
    let secondTeamArray = [...secondTeamScoreArray];
    let combinedTeamsScore = [...combinedScores];

    if (!firstTeamPoint || !secondTeamPoint) {
      alert("حط 0 على الاقل , لا تخلي اي نتيجه فاضي");
      return;
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
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  console.log(firstPoint);
  console.log(secondPoint);
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
          addScore={addScore}
        />
        <ScoresContainer combinedScores={combinedScores} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
