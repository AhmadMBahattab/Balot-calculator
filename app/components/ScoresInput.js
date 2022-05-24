import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { FAB, Input } from "react-native-elements";
import * as Localization from "expo-localization";
// en-US
// ar-EG

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ScoresInput = ({ firstPoint, secondPoint, remainWinScore, addScore }) => {
  const [visible, setVisible] = useState(true);
  const [firstScore, setfirstScore] = useState(0);
  const [secondScore, setsecondScore] = useState(0);

  const resetPoints = (first, second) => {
    setsecondScore(0);
    setfirstScore(0);
  };

  return (
    <View style={styles.scoreInputContainer}>
      {Localization.locale.startsWith("en") ? (
        <>
          <View style={styles.singleScoreInfoContainer}>
            <Text style={styles.textInfo}>لهم</Text>
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
              <Text style={[styles.textInfo, { color: "red" }]}>
                {firstPoint}
              </Text>
            )}

            <Input
              textAlign={"center"}
              keyboardType="numeric"
              onChangeText={(value) => setfirstScore(value)}
              value={firstScore}
              maxLength={3}
            />
          </View>
          <View style={styles.singleScoreInfoContainer}>
            <Text style={styles.singleScoreInfo}>الباقي</Text>
            <Text style={[styles.singleScoreInfo, { color: "#005EBF" }]}>
              {remainWinScore}
            </Text>
            <TouchableOpacity style={styles.singleScoreInfo}>
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
          <View style={styles.singleScoreInfoContainer}>
            <Text style={styles.textInfo}>لنا</Text>
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
              <Text style={[styles.textInfo, { color: "red" }]}>
                {secondPoint}
              </Text>
            )}
            <Input
              textAlign={"center"}
              keyboardType="numeric"
              onChangeText={(value) => setsecondScore(value)}
              value={secondScore}
              maxLength={3}
            />
          </View>
        </>
      ) : (
        <>
          <View style={styles.singleScoreInfoContainer}>
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
              <Text style={[styles.textInfo, { color: "red" }]}>
                {firstPoint}
              </Text>
            )}

            <Input
              textAlign={"center"}
              keyboardType="numeric"
              onChangeText={(value) => setfirstScore(value)}
              value={firstScore}
              maxLength={3}
            />
          </View>
          <View style={styles.singleScoreInfoContainer}>
            <Text style={styles.singleScoreInfo}>الباقي</Text>
            <Text style={[styles.singleScoreInfo, { color: "#005EBF" }]}>
              {remainWinScore}
            </Text>
            <TouchableOpacity style={styles.singleScoreInfo}>
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
          <View style={styles.singleScoreInfoContainer}>
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
              <Text style={[styles.textInfo, { color: "red" }]}>
                {secondPoint}
              </Text>
            )}
            <Input
              textAlign={"center"}
              keyboardType="numeric"
              onChangeText={(value) => setsecondScore(value)}
              value={secondScore}
              maxLength={3}
            />
          </View>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  scoreInputContainer: {
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    // borderBottomColor: "#E3E3E3",
    // borderBottomWidth: 1,
    // borderStyle: "solid",
    backgroundColor: "white",
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  singleScoreInfoContainer: {
    alignItems: "center",
    width: windowHeight / 7,
    // backgroundColor: "white",
  },
  singleScoreInfo: {
    marginVertical: 4,
    fontSize: 24,
  },

  textInfo: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScoresInput;
