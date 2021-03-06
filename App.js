import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import colorsReducer from "./store/reducers/colors";
import Appnavigator from "./Navigation/AppNavigation";

const rootReducer = combineReducers({
  colors: colorsReducer,
});
const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <Appnavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
