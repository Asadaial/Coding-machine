import React from "react";
import { TouchableOpacity } from "react-native";


const CustomTouchableOpacity = (props) => {
  return <TouchableOpacity activeOpacity={0.8} {...props} />;
};

export default CustomTouchableOpacity;
