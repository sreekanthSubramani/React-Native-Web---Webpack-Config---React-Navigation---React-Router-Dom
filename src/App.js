import Navigation from './navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import {View, StyleSheet, Text} from 'react-native'
import { storeConfig } from '../redux/store/store';
import {Provider} from 'react-redux'





export default function App() {

  console.log('CHeck')

  return (
    <Provider store={storeConfig}>

    <BrowserRouter>
      <Navigation />
    </BrowserRouter>

    </Provider>
  );
}

const styles = StyleSheet.create({
  march : {
    margin : "auto",
    marginTop : 100
  }
})