import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.color1}>   hi   </View>
      <View style={styles.color2}>        <Text style={{fontSize:80,color:"red"}}>Java Kishore</Text>
   </View>
      <View style={styles.color3}>   how are u   </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   flexDirection:'row'
  },
  color1:{
    backgroundColor:'orange',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  color3:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    
  },
  color2:{
    flex:1,
    // backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',  
  }
});
