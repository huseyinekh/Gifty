import { SET_COLOR_DATA } from "../actions/colors";
const initialState = {
  color: {
    color: "red",
    text: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR_DATA:
      const colorData = action.colorData;
      state.color = {
        color: colorData.color,
        text: colorData.inputVal,
      };
      break;

    default:
      break;
  }
  return state;
};
