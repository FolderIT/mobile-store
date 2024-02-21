import React, { useEffect } from "react";
import { View, Button, ScrollView } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { getAllProducts } from "../stores/actions/products.action";
import Product from "../components/Product";

const Productos = ({ navigation }) => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
const products = useSelector(
  state => state.productsReducer.products
)

useEffect(() => {
  if(isFocused){
    getAllProducts(dispatch)
  }
}, [isFocused])

  
  return (
    <ScrollView style={{ backgroundColor: 'white'}}>
      {products.length>0 &&  products.map((element, index) => (
          <Product key={index} product={element}/>
        ))}
      
      <Button
        title="Ir al carrito"
        onPress={() => navigation.navigate("Carrito")}
      />
      </ScrollView>
  );
};

export default Productos;
