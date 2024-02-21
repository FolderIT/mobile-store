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
          ),
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={Carrito}
        options={{
          tabBarLabel: "Carrito",
          tabBarIcon: ({ color, size }) => (
            <View>
              <Text
                style={{
                  position: "absolute",
                  right: -10,
                  fontSize: 18,
                  color: "blue",
                  fontWeight: "bold",
                  top: -5,
                }}
              >
                {products.length > 0 ? products.length : ''}
              </Text>
              <Icon name="cart-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
