import React, { useState } from "react";
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

const ScoresContainer = ({ combinedScores }) => {
  return (
    <View style={{ height: height / 2 }}>
      <ScrollView style={styles.scoresContainer}>
        {combinedScores.map((item, index) => (
          <View key={index} style={styles.singleScoreContainer}>
            <View style={styles.singleScoreInfo}>
              <Text style={styles.scoresFontSize}>{item.lastTotalA} </Text>
              <Text style={styles.scoresFontSize}>{item.teamA} +</Text>
              <Text>--------</Text>
              <Text style={styles.scoresFontSize}>{item.totalA}</Text>
            </View>

            <View style={styles.roundContainer}>
              <Text
                style={{ fontSize: 20, color: "#004582", fontWeight: "bold" }}
              >
                {index + 1}
              </Text>
            </View>

            <View style={styles.singleScoreInfo}>
              <Text style={styles.scoresFontSize}>{item.lastTotalB} </Text>
              <Text style={styles.scoresFontSize}>{item.teamB} +</Text>
              <Text>--------</Text>
              <Text style={styles.scoresFontSize}>{item.totalB}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scoresContainer: {
    padding: 20,
    marginBottom: 20,
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
