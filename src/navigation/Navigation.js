import React from 'react';
import {StyleSheet, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../DetailScreen';
import HomeScreen from '../HomeScreen';
import {Routes, Route} from 'react-router-dom'
import TaskCode from '../Tasks/Task';
import Navbar from '../Navs/Navbar';
import Timer from '../Timer/Timer';
import NewTaskDetail from '../Details/NewTaskScreen';





const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/details' element={<DetailsScreen />} />
          <Route path='/allTasks' element={<TaskCode />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/newTasks" element={<NewTaskDetail />} />
        </Routes>
      </View>
    </View>

  );
}


    

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
