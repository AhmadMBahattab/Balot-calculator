import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { FAB, Input } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ScoresInput = ({ firstPoint, secondPoint, addScore }) => {
  const [visible, setVisible] = useState(true);
  const [firstScore, setfirstScore] = useState(0);
  const [secondScore, setsecondScore] = useState(0);

  //   console.log("first ", firstScore);
  //   console.log("snd ", secondScore);

  const resetPoints = () => {
    setsecondScore(0);
    setfirstScore(0);
    console.log("why?");
  };

  return (
    <View style={styles.scoreInputContainer}>
      <View style={styles.singleScoreInfo}>
        <Text style={styles.textInfo}>لنا</Text>
        <Text></Text>
        <Text style={styles.textInfo}>{firstPoint}</Text>
        <Input
          textAlign={"center"}
          keyboardType="numeric"
          onChangeText={(value) => setfirstScore(value)}
          placeholder={"0"}
        />
      </View>
      <View style={styles.singleScoreInfo}>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity onPress={resetPoints}>
          <FAB
            visible={visible}
            style={{ marginTop: 10 }}
            icon={{ name: "add", color: "white" }}
            color="#004582"
            onPress={() => addScore(firstScore, secondScore)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.singleScoreInfo}>
        <Text style={styles.textInfo}>لهم</Text>
        <Text></Text>
        <Text style={styles.textInfo}>{secondPoint}</Text>
        <Input
          textAlign={"center"}
          keyboardType="numeric"
          onChangeText={(value) => setsecondScore(value)}
          placeholder={"0"}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  scoreInputContainer: {
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  singleScoreInfo: {
    alignItems: "center",
    width: windowHeight / 7,
  },
  textInfo: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScoresInput;
