import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  const deleteGoalHandler=(deleteId)=>{ 
    setCourseGoal((prevGoal)=>prevGoal.filter((item)=>item.id!==deleteId))
  }

  return (
    <View style={styles.appContainer}> 
     <GoalInput setCourseGoal={setCourseGoal}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoal}
          keyExtractor={(item,index)=>{
            return item.id
          }}
          renderItem={(item) => (
            <GoalItem item={item} onDeleteItem={deleteGoalHandler}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
  },
});
