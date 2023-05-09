import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { FAB, Input } from "react-native-elements";
import * as Localization from "expo-localization";
// en-US
// ar-EG

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ScoresInput = ({
  firstPoint,
  secondPoint,
  remainWinScore,
  addScore,
  darkMode,
  setdarkMode,
}) => {
  const [visible, setVisible] = useState(true);
  const [firstScore, setfirstScore] = useState(0);
  const [secondScore, setsecondScore] = useState(0);

  const resetPoints = (first, second) => {
    setsecondScore(0);
    setfirstScore(0);
  };

  return (
    <View
      style={[
        styles.scoreInputContainer,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      {Localization.locale.startsWith("en") ? (
        <>
          <View
            style={[
              styles.singleScoreInfoContainer,
              { backgroundColor: darkMode ? "black" : null },
            ]}
          >
            <Text
              style={[styles.textInfo, { color: darkMode ? "white" : null }]}
            >
              لهم
            </Text>
            <Text></Text>
            {firstPoint == secondPoint && darkMode === false ? (
              <Text style={[styles.textInfo, { color: "black" }]}>
                {firstPoint}
              </Text>
            ) : firstPoint > secondPoint && darkMode === false ? (
              <Text style={[styles.textInfo, { color: "green" }]}>
                {firstPoint}
              </Text>
            ) : (
              <Text
                style={[
                  styles.textInfo,
                  { color: !darkMode ? "red" : "white" },
                ]}
              >
                {firstPoint}
              </Text>
            )}

            <Input
              textAlign={"center"}
              keyboardType="numeric"
              onChangeText={(value) => setfirstScore(value)}
              value={firstScore}
              maxLength={3}
              style={{ color: darkMode ? "white" : null }}
            />
          </View>
          <View
            style={[
              styles.singleScoreInfoContainer,
              { backgroundColor: darkMode ? "black" : null },
            ]}
          >
            <Text
              style={[
                styles.singleScoreInfo,
                { color: darkMode ? "white" : null },
              ]}
            >
              الباقي
            </Text>
            <Text
              style={[
                styles.singleScoreInfo,

                { color: darkMode ? "white" : "#005EBF" },
              ]}
            >
              {remainWinScore}
            </Text>
            <TouchableOpacity style={styles.singleScoreInfo}>
              <FAB
                visible={visible}
                style={{ marginTop: 10 }}
                icon={{ name: "add", color: darkMode ? "black" : "white" }}
                // color="#004582"
                color={darkMode ? "white" : "#004582"}
                onPress={() => {
                  addScore(firstScore, secondScore),
                    resetPoints(firstScore, secondScore);
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.singleScoreInfoContainer}>
            <Text
              style={[styles.textInfo, { color: darkMode ? "white" : "black" }]}
            >
              لنا
            </Text>
            <Text></Text>
            {secondPoint == firstPoint && darkMode === false ? (
              <Text style={[styles.textInfo, { color: "black" }]}>
                {secondPoint}
              </Text>
            ) : secondPoint > firstPoint && darkMode === false ? (
              <Text style={[styles.textInfo, { color: "green" }]}>
                {secondPoint}
              </Text>
            ) : (
              <Text
                style={[
                  styles.textInfo,
                  { color: !darkMode ? "red" : "white" },
                ]}
              >
                {secondPoint}
              </Text>
            )}
            <Input
              textAlign={"center"}
              keyboardType="numeric"
              onChangeText={(value) => setsecondScore(value)}
              value={secondScore}
              maxLength={3}
              style={{ color: darkMode ? "white" : "black" }}
            />
          </View>
        </>
      ) : (
        <>
          <View
            style={[
              styles.singleScoreInfoContainer,
              { backgroundColor: darkMode ? "black" : null },
            ]}
          >
            <Text
              style={[styles.textInfo, { color: darkMode ? "white" : "black" }]}
            >
              لنا
            </Text>
            <Text></Text>
            {firstPoint == secondPoint ? (
              <Text
                style={[
                  styles.textInfo,
                  { color: darkMode ? "white" : "black" },
                ]}
              >
                {firstPoint}
              </Text>
            ) : firstPoint > secondPoint ? (
              <Text
                style={[
                  styles.textInfo,
                  { color: darkMode ? "white" : "green" },
                ]}
              >
                {firstPoint}
              </Text>
            ) : (
              <Text
                style={[styles.textInfo, { color: darkMode ? "white" : "red" }]}
              >
                {firstPoint}
              </Text>
            )}

            <Input
              textAlign={"center"}
              keyboardType="numeric"
              onChangeText={(value) => setfirstScore(value)}
              value={firstScore}
              maxLength={3}
              style={{ color: darkMode ? "white" : "black" }}
            />
          </View>
          <View style={styles.singleScoreInfoContainer}>
            <Text
              style={[
                styles.singleScoreInfo,
                { color: darkMode ? "white" : "black" },
              ]}
            >
              الباقي
            </Text>
            <Text
              style={[
                styles.singleScoreInfo,

                { color: darkMode ? "white" : "#005EBF" },
              ]}
            >
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
            <Text
              style={[styles.textInfo, { color: darkMode ? "white" : "black" }]}
            >
              لهم
            </Text>
            <Text></Text>
            {secondPoint == firstPoint ? (
              <Text
                style={[
                  styles.textInfo,
                  { color: darkMode ? "white" : "black" },
                ]}
              >
                {secondPoint}
              </Text>
            ) : secondPoint > firstPoint ? (
              <Text
                style={[
                  styles.textInfo,
                  { color: darkMode ? "white" : "green" },
                ]}
              >
                {secondPoint}
              </Text>
            ) : (
              <Text
                style={[styles.textInfo, { color: darkMode ? "white" : "red" }]}
              >
                {secondPoint}
              </Text>
            )}
            <Input
              textAlign={"center"}
              keyboardType="numeric"
              onChangeText={(value) => setsecondScore(value)}
              value={secondScore}
              maxLength={3}
              style={{ color: darkMode ? "white" : "black" }}
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
    borderBottomColor: "#E3E3E3",
    borderBottomWidth: 1,
    borderStyle: "solid",
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
    fontSize: 28,
  },

  textInfo: {
    fontSize: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScoresInput;
