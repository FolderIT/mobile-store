import React, { useEffect, useState } from "react";
import { Text, Button, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Product from "../components/Product";

const Carrito = ({ navigation }) => {
  const products = useSelector((state) => state.productsReducer.productsInCart);
  const total = products.reduce((acc, current) => acc + current.price, 0);
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      {products.length > 0 ? (
        products.map((element, index) => (
          <Product carrito key={index} product={element} />
        ))
      ) : (
        <Text
          style={{
            fontSize: 18,
            color: "blue",
            alignSelf: "center",
            marginVertical: 300,
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
      <Button title="Volver" onPress={() => navigation.navigate("Productos")} />
    </ScrollView>
  );
};

export default Carrito;
