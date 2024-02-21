
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Productos from '../screens/Productos';
import Carrito from '../screens/Carrito';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Productos">
        <Stack.Screen name="Productos" component={Productos} />
        <Stack.Screen name="Carrito" component={Carrito} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;