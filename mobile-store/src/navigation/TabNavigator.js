import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Productos from "../screens/Productos";
import Carrito from "../screens/Carrito";
import Icon from "react-native-vector-icons/Ionicons";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  const products = useSelector(
    state => state.productsReducer.productsInCart
  )

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
            <Icon name="pricetag-outline" size={20} color={color} />
          ),
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
            <View>
              <Text
                style={{
                  position: "absolute",
                  right: -10,
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                  top: -5,
                }}
              >
                {products.length > 0 ? products.length : ''}
              </Text>
              <Icon name="cart-outline" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
