import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hello Buddy...!</Text>
      <View style={styles.circle}>
        <Text style={styles.test}>busting</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
   color:"#fff",
   
  },
  container: {
    flex: 1,
    color:'#fff',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle:{
    backgroundColor:'#fff',
  },
  test:{
    color:'red',
    
  }
});
