//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

// create a component
const Input = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <TextInput
        style={styles.textInput}
        placeholder="Type text"
        placeholderTextColor="gray"
        value={props.value}
        onChangeText={props.onChangeTextHandler}
        
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
    width: "98%",
    height: 60,
    borderRadius: 10,
    marginVertical: 10,
  },
  textInput: {
    marginLeft: 10,
    fontSize: 20,
  },
});

//make this component available to the app
export default Input;
