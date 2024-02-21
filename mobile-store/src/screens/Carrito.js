import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Carrito = ({ navigation }) => {
  const products = useSelector((state) => state.productsReducer.productsInCart);
  const total = products.reduce((acc, current) => acc + current.price, 0);
  return (
    <ScrollView contentContainerStyle={{alignItems: "center", backgroundColor: "#F5F5F5"}}>
      {products.length > 0 ? (
        products.map((element, index) => (
          <Product carrito key={index} product={element} />
        ))
      ) : (
        <Text
          style={{
            marginVertical: 50, fontSize: 20, color: "black"
          }}
        >
          Aún no tienes productos en el carrito
        </Text>
      )}

      {products.length > 0 && (
              <Text
                style={{
                  fontSize: 20,
                  color: "blue",
                  alignSelf: "center",
                  marginVertical: 10,
                }}
              >
                Total: ${total.toFixed(2)}
              </Text>
            )}
       <TouchableOpacity
        style={{ marginBottom: 20 }}
        onPress={() => navigation.navigate("Productos")}
      >
        <LinearGradient
          colors={["#760097", "#FD0079"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.buttonText}>Volver</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
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

export default Carrito;
