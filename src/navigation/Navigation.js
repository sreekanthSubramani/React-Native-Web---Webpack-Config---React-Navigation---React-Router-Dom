import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../DetailScreen';
import HomeScreen from '../HomeScreen';
import {Routes, Route} from 'react-router-dom'



const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path="/details" element={<DetailsScreen />} />
    </Routes>
  );
}
