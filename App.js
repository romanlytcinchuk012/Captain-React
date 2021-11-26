
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/Screens/Splash'
import Home from './src/Screens/Home'
import forecastdetail from './src/Screens/Forecastdetail'
import forecastMenu from './src/Screens/ForecastMenu'
import Account from './src/Screens/Account'
import Login from './src/Screens/Login/Login'
const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      > 
        <Stack.Screen name="Login" component={Login} />      
        <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Account" component={Account} />
      
        <Stack.Screen name="forecastMenu" component={forecastMenu} />
             <Stack.Screen name="forecastdetail" component={forecastdetail} />
       <Stack.Screen name="Home" component={Home} />
            

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;