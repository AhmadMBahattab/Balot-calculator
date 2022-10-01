import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: props.darkMode ? "black" : "#004582" },
      ]}
    >
      <DrawerContentScrollView {...props} style={{ width: "90%" }}>
        <View style={styles.singleItem}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      {/* <View style={styles.sittingsContainer}>
        <TouchableOpacity>
          <View style={{ padding: 5 }}>
            <Feather name="settings" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  singleItem: {
    paddingTop: 20,
    color: "white",
  },
  sittingsContainer: {
    padding: 20,
    color: "white",
    justifyContent: "center",
    width: "80%",
  },
});

export default CustomDrawer;
