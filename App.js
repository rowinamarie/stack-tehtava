import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

//navigointi
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './screens/Calculator'
import History from './screens/History'

const Stack = createNativeStackNavigator();
export default function App() {
 
  const [vastaukset, setVastaukset] = useState([]);

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator">
          {props => <Calculator {...props} vastaukset={vastaukset} setVastaukset={setVastaukset} />}
        </Stack.Screen>
        <Stack.Screen name="History">
          {props => <History {...props} vastaukset={vastaukset} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
