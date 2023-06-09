import React from "react";
import { Keyboard, Pressable, StyleSheet } from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";
import { useTheme } from "../../hooks";

const KeyboardDismissContainer = ({ style, ...props }) => {
    const {
        Common,
        Fonts,
        Gutters,
        Layout,
        Images,
        Colors,
        darkMode: isDark,
      } = useTheme();
  return (
    <Pressable
      style={[styles.container, style,{backgroundColor:Colors.white}]}
      onPress={Keyboard.dismiss}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: RFPercentage(0),
   
  },
});


export default KeyboardDismissContainer;
