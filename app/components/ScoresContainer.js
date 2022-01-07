import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const ScoresContainer = ({ combinedScores }) => {
  return (
    <ScrollView style={styles.scoresContainer}>
      {combinedScores.map((item) => (
        <View style={styles.singleScoreContainer}>
          <View style={styles.singleScoreInfo}>
            <Text>{item.lastTotalA} +</Text>
            <Text>{item.teamA}</Text>
            <Text>......</Text>
            <Text>{item.totalA}</Text>
          </View>

          <Text></Text>

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
    marginBottom: 10,
  },
});

export default ScoresContainer;
