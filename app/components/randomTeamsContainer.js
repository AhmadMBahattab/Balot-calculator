import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { FAB } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RandomTeamsContainer = ({ teams, toggleOverlay }) => {
  return (
    <View style={{ backgroundColor: "#004582" }}>
      <View style={styles.overlayExitButton}>
        <FAB
          icon={{ name: "cancel", color: "#004582" }}
          size="small"
          color="white"
          onPress={toggleOverlay}
        />
      </View>
      <View style={styles.teamsContainer}>
        <View style={[styles.team, { backgroundColor: "#8ED1FC" }]}>
          <Text style={styles.teamTitle}>الفريق 2</Text>
          <Text style={{ marginTop: 5, fontSize: 18, color: "white" }}>
            {teams[0]}
          </Text>
          <Text style={{ marginTop: 5, fontSize: 18, color: "white" }}>
            {teams[1]}
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>
        <View style={[styles.team, { backgroundColor: "#F96637" }]}>
          <Text style={styles.teamTitle}>الفريق 1</Text>
          <Text style={{ marginTop: 5, fontSize: 18, color: "white" }}>
            {teams[2]}
          </Text>
          <Text style={{ marginTop: 5, fontSize: 18, color: "white" }}>
            {teams[3]}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  chooseTeamesButton: {
    margin: 20,
    backgroundColor: "#004512",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
  },
  overlayExitButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 10,
  },
  teamsContainer: {
    padding: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    width: windowWidth / 1.1,
  },
  team: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
  },

  teamTitle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
  },
});
export default RandomTeamsContainer;
