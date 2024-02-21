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
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: [
          {
            backgroundColor: "#1b1c20",
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
          headerStyle: {
            backgroundColor: "#1b1c20",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontFamily: "Mulish",
            fontWeight: "400",
            fontSize: 20,
          },
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
          headerStyle: {
            backgroundColor: "#1b1c20",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontFamily: "Mulish",
            fontWeight: "400",
            fontSize: 20,
          },
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
