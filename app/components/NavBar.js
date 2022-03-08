import React, { useState } from "react";
import ResetComponent from "./ResetComponent";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const statusBarHight = StatusBar.currentHeight;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NavBar = ({ resetScores, backOneStep }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <>
      <ResetComponent
        visible={visible}
        resetScores={resetScores}
        toggleOverlay={toggleOverlay}
      />
      <View style={styles.navBar}>
        <View style={styles.navBarInfo}>
          <View style={styles.navBarButtons}>
            <TouchableOpacity onPress={backOneStep}>
              <FontAwesome5 name="redo" size={20} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleOverlay}>
              <MaterialCommunityIcons
                name="delete"
                style={{
                  fontSize: 24,
                  color: "white",
                  marginRight: windowWidth / 20,
                  marginLeft: windowWidth / 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 20, color: "white" }}>
            حاسبة بلوت الاستو
          </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  navBar: {
    padding: 20,
    backgroundColor: "#004582",
    justifyContent: "center",
  },
  navBarInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  navBarButtons: {
    flexDirection: "row",
  },
});

export default NavBar;
