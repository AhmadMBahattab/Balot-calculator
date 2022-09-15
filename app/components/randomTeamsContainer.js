import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { FAB } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RandomTeamsContainer = ({ teams, toggleOverlay, darkMode }) => {
  return (
    <>
      {/* <View style={{ backgroundColor: "#004582" }}>
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
              {teams[0].name}
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18, color: "white" }}>
              {teams[1].name}
            </Text>
          </View>
          <View>
            <Text></Text>
          </View>
          <View style={[styles.team, { backgroundColor: "#F96637" }]}>
            <Text style={styles.teamTitle}>الفريق 1</Text>
            <Text style={{ marginTop: 5, fontSize: 18, color: "white" }}>
              {teams[2].name}
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18, color: "white" }}>
              {teams[3].name}
            </Text>
          </View>
        </View>
      </View> */}
      <View
        style={{
          width: windowWidth / 1.3,
          padding: 10,
          backgroundColor: darkMode ? "black" : "#004582",
        }}
      >
        <View style={styles.overlayExitButton}>
          <FAB
            icon={{ name: "cancel", color: "white" }}
            size="small"
            color={darkMode ? "black" : "#004582"}
            onPress={toggleOverlay}
          />
        </View>
        <View
          style={{
            paddingLeft: 20,
            paddingBottom: 10,
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: "lightgray",
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              marginTop: 5,
              marginBottom: 5,
              fontSize: 22,
              color: "black",
              fontWeight: "bold",
            }}
          >
            الفريق 1
          </Text>
          <Text style={{ marginTop: 5, fontSize: 18, color: "black" }}>
            {teams[2].name}
          </Text>
          <Text style={{ marginTop: 5, fontSize: 18, color: "black" }}>
            {teams[3].name}
          </Text>
        </View>
        <View
          style={{
            paddingLeft: 20,
            paddingBottom: 10,
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              marginTop: 5,
              marginBottom: 5,
              fontSize: 22,
              color: "black",
              fontWeight: "bold",
            }}
          >
            الفريق 2
          </Text>
          <Text style={{ marginTop: 5, fontSize: 18, color: "black" }}>
            {teams[0].name}
          </Text>
          <Text style={{ marginTop: 5, fontSize: 18, color: "black" }}>
            {teams[1].name}
          </Text>
        </View>
      </View>
    </>
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
    marginRight: 0,
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
