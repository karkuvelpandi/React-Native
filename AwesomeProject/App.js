import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntroPage from "./app/IntroPage";
export default function App() {
  return (
    <View style={styles.container}>
      <IntroPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#000",
    flexDirection: "row",
  },
  color1: {
    backgroundColor: "orange",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  color3: {
    flex: 1,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  color2: {
    flex: 1,
    // backgroundColor:'blue',
    alignItems: "center",
    justifyContent: "center",
  },
});
