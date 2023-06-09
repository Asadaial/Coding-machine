import React from "react";
import { StyleSheet } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CustomKeyboardAwareScrollView = (props) => {
  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      scrollEnabled={false}
      keyboardShouldPersistTaps={"always"}
      contentContainerStyle={styles.container}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
});

export default CustomKeyboardAwareScrollView;
