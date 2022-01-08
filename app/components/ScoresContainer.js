import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const ScoresContainer = ({ combinedScores }) => {
  return (
    <ScrollView style={styles.scoresContainer}>
      {combinedScores.map((item, index) => (
        <View style={styles.singleScoreContainer}>
          <View style={styles.singleScoreInfo}>
            <Text>{item.lastTotalA} +</Text>
            <Text>{item.teamA}</Text>
            <Text>......</Text>
            <Text>{item.totalA}</Text>
          </View>

          <View style={styles.roundContainer}>
            <Text style={{ fontSize: 18, color: "#004582" }}>{index + 1}</Text>
          </View>

          <View style={styles.singleScoreInfo}>
            <Text>{item.lastTotalB} +</Text>
            <Text>{item.teamB}</Text>
            <Text>......</Text>
            <Text>{item.totalB}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scoresContainer: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#E9E9E9",
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
    marginBottom: 10,
  },
  roundContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScoresContainer;
