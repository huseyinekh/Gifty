//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import * as colorActions from "../store/actions/colors"
//components
import Input from "../components/Input";
import RoundedBtn from "../components/RoundedBtn";
import Button_ from "../components/Button";
// create a screen

const MainScreen = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [color, setColor] = useState("white");
  const textChangeHandler = (text) => {
    setInputVal(text);
  };

  const dispatch=useDispatch()
  const colorChangeHandler = (color) => {
    setColor(color)
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Input
          value={inputVal}
          onChangeTextHandler={(text) => textChangeHandler(text)}
          style={styles.textInput}
        />
        <View style={styles.roundedBtnsContainer}>
          <RoundedBtn
            onPressHandler={colorChangeHandler.bind(this, "aqua")}
            color="aqua"
          />
          <RoundedBtn
            onPressHandler={colorChangeHandler.bind(this, "blue")}
            color="blue"
          />
          <RoundedBtn
            onPressHandler={colorChangeHandler.bind(this, "orange")}
            color="orange"
          />
          <RoundedBtn
            onPressHandler={colorChangeHandler.bind(this, "dark")}
            color="dark"
          />
          <RoundedBtn
            onPressHandler={colorChangeHandler.bind(this, "brown")}
            color="brown"
          />
          <RoundedBtn
            onPressHandler={colorChangeHandler.bind(this, "aquamarine")}
            color="aquamarine"
          />
        </View>
      </View>
      <Button_
        title="Send Text"
        onPressHandler={() => {
          dispatch(colorActions.SetData({color,inputVal}))
          props.navigation.navigate("Result");
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1b1c1b",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  roundedBtnsContainer: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
  },
  container: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sendBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "green",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
  },
  btnOpacity: {
    width: "80%",
    marginVertical: 30,
  },
});

//make this component available to the app
export default MainScreen;
