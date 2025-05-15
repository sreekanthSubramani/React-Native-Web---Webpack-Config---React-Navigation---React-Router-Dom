import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import {View, StyleSheet, Text} from 'react-native'



export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  march : {
    margin : "auto",
    marginTop : 100
  }
})