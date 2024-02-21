import React from 'react';
import { View, Text, Image } from 'react-native';

const Product = ({ product, carrito }) => {
  return (
    <View style={{ paddingVertical: 5, marginBottom: 10, flexDirection: 'row', backgroundColor: 'white'}}>
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
  );
};

export default Product;