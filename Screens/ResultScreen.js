import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const ResultScreen = props => {
  const data = useSelector((state) => state.colors.color);
  return (
    <View style={{ ...styles.screen, ...{ backgroundColor: data.color } }}>
      <View style={styles.textArea}>
        <Text style={{ ...styles.font, ...{ color: "white" } }}>
          Your text is :
        </Text>
        <Text style={styles.font}> {data.text}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    backgroundColor: "#1b1c1b",
    justifyContent: "center",
    alignItems: "center",
  },
  textArea: {
    display: "flex",
    flexDirection: "row",
  },
  font: {
    fontSize: 20,
  },
});
export default ResultScreen;
