import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//screens
import MainScreen from "../Screens/MainScreen";
import ResultScreen from "../Screens/ResultScreen";
const StackNavigation = createStackNavigator(
  {
    Main: MainScreen,
    Result: ResultScreen,
  },
  {
    defaultNavigationOptions: {
      title: "Gifty",
    },
  }
);

export default createAppContainer(StackNavigation);
