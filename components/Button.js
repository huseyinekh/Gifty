//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const MyButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressHandler} style={styles.btnOpacity}>
      <View style={styles.sendBtn}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  sendBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
    backgroundColor: "green",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "white",
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  btnOpacity: {
    width: "90%",
    marginVertical: 30,
  },
});

//make this component available to the app
export default MyButton;
