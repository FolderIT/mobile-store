import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Productos from "../screens/Productos";
import Carrito from "../screens/Carrito";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Productos"
        component={Productos}
        options={{
          tabBarLabel: "Productos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="pricetag-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={Carrito}
        options={{
          tabBarLabel: "Carrito",
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart-outline" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
