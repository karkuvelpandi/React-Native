import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import logo from "../assets/logo-main.png";
const IntroPage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.mainLogo} source={logo} />
      <Text style={styles.text1}>Habituate</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text1: {
    color: "white",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainLogo: {
    width: 100,
    height: 100,
  },
});
export default IntroPage;
