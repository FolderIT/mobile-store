import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Productos from "../screens/Productos";
import Carrito from "../screens/Carrito";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Productos">
        <Stack.Screen
          name="Productos"
          component={Productos}
          options={{
            title: "Productos",
            headerStyle: {
              backgroundColor: "#1b1c20",
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontFamily: "Mulish",
              fontWeight: "400",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Carrito"
          component={Carrito}
          options={{
            title: "Carrito",
            headerStyle: {
              backgroundColor: "#1b1c20",
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontFamily: "Mulish",
              fontWeight: "400",
              fontSize: 20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
