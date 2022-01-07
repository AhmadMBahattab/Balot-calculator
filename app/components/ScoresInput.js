import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { FAB, Input } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ScoresInput = ({ firstPoint, secondPoint, addScore }) => {
  const [visible, setVisible] = useState(true);
  const [firstScore, setfirstScore] = useState(0);
  const [secondScore, setsecondScore] = useState(0);

  const resetPoints = (first, second) => {
    setsecondScore(0);
    setfirstScore(0);
    console.log("why?");
  };

  return (
    <View style={styles.scoreInputContainer}>
      <View style={styles.singleScoreInfo}>
        <Text style={styles.textInfo}>لنا</Text>
        <Text></Text>
        {firstPoint == secondPoint ? (
          <Text style={[styles.textInfo, { color: "black" }]}>
            {firstPoint}
          </Text>
        ) : firstPoint > secondPoint ? (
          <Text style={[styles.textInfo, { color: "green" }]}>
            {firstPoint}
          </Text>
        ) : (
          <Text style={[styles.textInfo, { color: "red" }]}>{firstPoint}</Text>
        )}

        <Input
          textAlign={"center"}
          keyboardType="numeric"
          onChangeText={(value) => setfirstScore(value)}
          value={firstScore}
        />
      </View>
      <View style={styles.singleScoreInfo}>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity>
          <FAB
            visible={visible}
            style={{ marginTop: 10 }}
            icon={{ name: "add", color: "white" }}
            color="#004582"
            onPress={() => {
              addScore(firstScore, secondScore),
                resetPoints(firstScore, secondScore);
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.singleScoreInfo}>
        <Text style={styles.textInfo}>لهم</Text>
        <Text></Text>
        {secondPoint == firstPoint ? (
          <Text style={[styles.textInfo, { color: "black" }]}>
            {secondPoint}
          </Text>
        ) : secondPoint > firstPoint ? (
          <Text style={[styles.textInfo, { color: "green" }]}>
            {secondPoint}
          </Text>
        ) : (
          <Text style={[styles.textInfo, { color: "red" }]}>{secondPoint}</Text>
        )}
        <Input
          textAlign={"center"}
          keyboardType="numeric"
          onChangeText={(value) => setsecondScore(value)}
          value={secondScore}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  scoreInputContainer: {
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  singleScoreInfo: {
    alignItems: "center",
    width: windowHeight / 7,
  },
  textInfo: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScoresInput;
