import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen/RegistroScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DicasScreen from '../screens/DicasScreen/DicasScreen';
import ConsumoScreen from '../screens/ConsumoScreen/ConsumoScreen';
import { RootStackParamList } from '../navigation/type';


const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={RegistroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dicas" component={DicasScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Consumo" component={ConsumoScreen} options={{ headerShown: false }} />   

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
