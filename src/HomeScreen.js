
import { View, Text, Button, StyleSheet } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import TaskCode from './Tasks/Task'



export default function HomeScreen({ navigation }) {

  const Drawer = createDrawerNavigator()
  console.log('check if renders')

  return (
    <>
      <TaskCode />
    </>
  );
}


const styles = StyleSheet.create({
  mainFlex : {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  stackNav : {
    justifyContent : "flex-start",
    alignContent : "flex-start",
    width : 500
  }
})