import React, { useState, useEffect } from "react";
import ResetComponent from "./ResetComponent";
import Setting from "./settings/Settings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Switch,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { Overlay } from "react-native-elements";

import { DarkModeSwitch } from "react-toggle-dark-mode";

const statusBarHight = StatusBar.currentHeight;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NavBar = ({ resetScores, backOneStep, darkMode, setdarkMode }) => {
  const [visible, setVisible] = useState(false);
  const [sittengVisible, setsittengVisible] = useState(false);

  useEffect(() => {}, []);

  const toggleResetOverlay = () => {
    setVisible(!visible);
  };

  const toggleSittingOverlay = () => {
    setsittengVisible(!sittengVisible);
  };

  const toggleSwitch = async () => {
    try {
      setdarkMode(!darkMode);

      if (darkMode === false) {
        AsyncStorage.setItem("darkModeState", JSON.stringify(true));
      } else {
        AsyncStorage.setItem("darkModeState", JSON.stringify(false));
      }

      const cheackDarkModdExist = await AsyncStorage.getItem("darkModeState");

      console.log("toggle", cheackDarkModdExist, typeof cheackDarkModdExist);
    } catch (error) {}
  };

  return (
    <>
      <ResetComponent
        visible={visible}
        resetScores={resetScores}
        toggleOverlay={toggleResetOverlay}
      />
      <View
        style={[
          styles.navBar,
          { backgroundColor: darkMode ? "black" : "#004582" },
        ]}
      >
        <View style={styles.navBarInfo}>
          <View style={styles.navBarButtons}>
            <TouchableOpacity onPress={backOneStep}>
              <MaterialCommunityIcons
                name="backup-restore"
                size={28}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleResetOverlay}>
              <MaterialCommunityIcons
                name="new-box"
                style={{
                  fontSize: 28,
                  color: "white",
                  marginRight: windowWidth / 20,
                  marginLeft: windowWidth / 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            حاسبة بلوت الاستو
          </Text>
          <Switch
            trackColor={{ true: "#767577", false: "white" }}
            thumbColor={!darkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="white"
            onValueChange={toggleSwitch}
            value={darkMode}
          />
          {/* <TouchableOpacity onPress={toggleSittingOverlay}>
            <View>
              <Ionicons name="settings-sharp" size={26} color="white" />
            </View>
          </TouchableOpacity> */}
        </View>
      </View>

      <Overlay
        animationType="slide"
        isVisible={sittengVisible}
        onBackdropPress={toggleSittingOverlay}
      >
        <View style={styles.settingContainer}>
          <Text>Hello from Overlay!</Text>
          <Text>this is Setting overlay</Text>
        </View>
      </Overlay>
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
  settingContainer: {
    flexDirection: "row",
  },
});

export default NavBar;
