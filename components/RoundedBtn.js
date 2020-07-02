//import liraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Dimensions } from "react-native";
import {useSelector} from 'react-redux'
// create a component
const RoundedBtn = (props) => {


  return (
    <TouchableOpacity onPress={props.onPressHandler} style={{...styles.btnOpacity,...{ backgroundColor: props.color }}}>
      <View
        style={ styles.container }
      >
        <Text style={styles.text}></Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%", 
  },
  btnOpacity: {
    borderRadius: 50,
    width: Dimensions.get("window").width/6-12,
    height: Dimensions.get("window").width/6-12,
    backgroundColor:"aqua",
    margin:5,
    borderWidth:4,
    borderColor:"white"
  },
  text: {},
});

//make this component available to the app
export default RoundedBtn;
