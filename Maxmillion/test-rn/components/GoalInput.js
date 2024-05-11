import {useState} from "react"
import {Button, StyleSheet, TextInput, View, Modal} from "react-native"

export const GoalInput = ({setCourseGoal}) => {
  const [goalEntered, setGoalEntered] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  function goalInputHandler(enteredText) {
    setGoalEntered(enteredText);
  }

  function addGoalHandler() {
    console.log(goalEntered);
    setCourseGoal((prevGoals) => [
      ...prevGoals,
      { text: goalEntered, id: Math.random().toString() },
    ]);
    setGoalEntered("")
    setModalVisible(false)
  }

  return (
    <>
    <Button title="Add new goal" color="#5e8acc" onPress={()=>setModalVisible(true)} />
    <Modal visible={modalVisible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Enter Goal Here!"
        value={goalEntered}
      />
      <View style={styles.btnContainer}>
        <View style={styles.button}>
       <Button onPress={addGoalHandler} title="Add Goal" />
        </View>
        <View style={styles.button}>
       <Button onPress={()=>setModalVisible(false)} title="Cancel" />
        </View>
      </View>
    </View>
    </Modal>
   
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gainsboro",
    padding:16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
  },
  btnContainer:{
     flexDirection:"row",
     marginTop:18
  },
  button:{
    width:100,
    marginHorizontal:8
  }
});
