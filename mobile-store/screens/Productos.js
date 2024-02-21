import React from "react";
import { View, Text, Button, Image } from "react-native";

const Productos = ({ navigation }) => {
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
  return (
    <View style={{ backgroundColor: 'white'}}>
    <View style={{marginBottom: 30, flexDirection: 'row', backgroundColor: 'white'}}>
      <Image
       resizeMode="contain"
       style={{
         width: 200,
         height: 200
       }}
      source={{uri : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}}></Image>
      <View style={{ width: "50%", alignSelf: "flex-end" }}>
        <Text style={{ fontSize: 20 }}>
          {product.title}
        </Text>
        <Text style={{ fontSize: 18, color: "blue" }}>${product.price}</Text>
        <Text>{product.description}</Text>
      </View>
    </View>

      <Button
        title="Ir al carrito"
        onPress={() => navigation.navigate("Carrito")}
      />
      </View>
  );
};

export default Productos;
