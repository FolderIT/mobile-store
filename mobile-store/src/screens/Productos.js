import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Product from "../components/Product";

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

const Productos = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#F5F5F5" }}>
      <Product product={product} />
      <TouchableOpacity
        style={{ bottom: 20, position: "absolute" }}
        onPress={() => navigation.navigate("Carrito")}
      >
        <LinearGradient
          colors={["#760097", "#FD0079"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.buttonText}>Ir al carrito</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontStyle: 'normal',
    fontSize: 20,
    fontFamily: 'Mulish',
    textAlign: 'center',
    color: "white",
  },
  gradient: {
    height: 50,
    borderRadius: 50,
    textAlign: 'center',
    width: 350,
  },
});
export default Productos;
