import { StyleSheet, View, Text, Pressable } from "react-native";
export const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, item.item.id)}
        style={({pressed})=>pressed&&styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{item.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    marginBottom: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 4,
    borderRadius: 10,
  },
  goalItemText: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: "white",
  },
  pressedItem:{
    opacity:0.5
  }
});
