import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Dimensions } from "react-native";
import { Button, Overlay } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ResetComponent = ({ resetScores, toggleOverlay, visible }) => {
  return (
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      <View style={styles.resetContainer}>
        <Text style={{ fontSize: 20 }}>صكة جديدة ؟</Text>
        <View style={styles.resetButtons}>
          <View style={styles.singleResetButton}>
            <Button
              title={"لا"}
              onPress={toggleOverlay}
              buttonStyle={{
                backgroundColor: "#004582",
                borderRadius: 5,
              }}
            />
          </View>
          <View style={styles.singleResetButton}>
            <Button
              title={"نعم"}
              onPress={() => {
                resetScores(), toggleOverlay();
              }}
              buttonStyle={{
                backgroundColor: "#004582",
                borderRadius: 5,
              }}
            />
          </View>
        </View>
      </View>
    </Overlay>
  );
};
const styles = StyleSheet.create({
  resetContainer: {
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: windowWidth / 10,
  },
  resetButtons: {
    marginTop: 10,
    flexDirection: "row",
  },
  singleResetButton: {
    margin: 15,
    padding: 0,
    width: windowWidth / 8,
  },
});

export default ResetComponent;
