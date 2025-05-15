import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
}
