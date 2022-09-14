import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
const background = require("../assets/2222.png");

const ScoresContainer = ({ combinedScores, darkMode, setdarkMode }) => {
  const scrollViewRef = useRef();
  return (
    <ScrollView
      style={[
        styles.scoresContainer,
        { backgroundColor: darkMode ? "black" : null },
      ]}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
    >
      {combinedScores.map((item, index) => (
        <View key={index} style={styles.singleScoreContainer}>
          <View
            style={[
              styles.singleScoreInfo,
              { backgroundColor: darkMode ? "black" : "white" },
            ]}
          >
            <Text
              style={[
                styles.scoresFontSize,
                { color: darkMode ? "white" : null },
              ]}
            >
              {item.lastTotalA}{" "}
            </Text>
            <Text
              style={[
                styles.scoresFontSize,
                { color: darkMode ? "white" : null },
              ]}
            >
              {item.teamA} +
            </Text>
            <Text style={{ color: darkMode ? "white" : null }}>--------</Text>
            <Text
              style={[
                styles.scoresFontSize,
                { color: darkMode ? "white" : null },
              ]}
            >
              {item.totalA}
            </Text>
          </View>

          <View style={styles.roundContainer}>
            <Text
              style={{
                fontSize: 20,
                color: darkMode ? "white" : "#004582",
                fontWeight: "bold",
              }}
            >
              {index + 1}
            </Text>
          </View>

          <View
            style={[
              styles.singleScoreInfo,
              { backgroundColor: darkMode ? "black" : "white" },
            ]}
          >
            <Text
              style={[
                styles.scoresFontSize,
                { color: darkMode ? "white" : null },
              ]}
            >
              {item.lastTotalB}{" "}
            </Text>
            <Text
              style={[
                styles.scoresFontSize,
                { color: darkMode ? "white" : null },
              ]}
            >
              {item.teamB} +
            </Text>
            <Text style={{ color: darkMode ? "white" : null }}>--------</Text>
            <Text
              style={[
                styles.scoresFontSize,
                { color: darkMode ? "white" : null },
              ]}
            >
              {item.totalB}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scoresContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    // marginBottom: 20,
    backgroundColor: "transparent",
  },
  singleScoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  singleScoreInfo: {
    backgroundColor: "white",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 40,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  roundContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  scoresFontSize: {
    fontSize: 16,
  },
});

export default ScoresContainer;
