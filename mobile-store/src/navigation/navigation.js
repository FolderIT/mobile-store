import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../components/TabNavigator';
import Productos from '../screens/Productos';
import Carrito from '../screens/Carrito';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default Navigation;