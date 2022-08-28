import React, { useState } from "react";
import ResetComponent from "./ResetComponent";
import Setting from "./settings/Settings";
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

const NavBar = ({ resetScores, backOneStep }) => {
  const [visible, setVisible] = useState(false);
  const [sittengVisible, setsittengVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleResetOverlay = () => {
    setVisible(!visible);
  };

  const toggleSittingOverlay = () => {
    setsittengVisible(!sittengVisible);
  };

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <>
      <ResetComponent
        visible={visible}
        resetScores={resetScores}
        toggleOverlay={toggleResetOverlay}
      />
      <View style={styles.navBar}>
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
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
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
