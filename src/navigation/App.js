import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import OTP from '../screens/OTP';
import Home from '../screens/Home';
import InstaReels from '../screens/InstaReels';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="OTP" component={OTP} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{title:'Zomato'}} />
        <Stack.Screen name="InstaReels" component={InstaReels} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;