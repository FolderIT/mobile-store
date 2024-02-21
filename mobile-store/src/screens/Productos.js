import React, { useEffect } from "react";
import { Button, ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { getAllProducts } from "../stores/actions/products.action";
import Product from "../components/Product";
import LinearGradient from "react-native-linear-gradient";

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
    <ScrollView style={{ backgroundColor: '#F6F6F6'}}>
      {products.length>0 &&  products.map((element, index) => (
          <Product key={index} product={element}/>
        ))}
      
      <TouchableOpacity
        style={{ alignSelf: 'center', marginBottom: 20 }}
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

export default Productos;
