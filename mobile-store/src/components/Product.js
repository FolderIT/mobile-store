import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { addToCart, deleteFromCart } from '../stores/actions/products.action';
import { useDispatch } from 'react-redux';

const Product = ({ product, carrito }) => {
  const dispatch = useDispatch()

  return (
    <View style={{ paddingVertical: 5, marginBottom: 10, flexDirection: 'row', backgroundColor: 'white', alignContent: 'space-between'}}>
      <View style={{width: "50%", alignItems: 'center'}}>
      <Image
       resizeMode="center"
       style={{
         width: 180,
         height: 180
       }}
      source={{uri : product?.image}}></Image>
      </View>
      <View style={{ width: "50%"}}>
        <Text style={{ fontSize: 20 }}>
         {product?.title}
        </Text>
        <Text style={{ fontSize: 18, color: "blue" }}>${product?.price.toFixed(2)}</Text>
        <Text>{product?.description}</Text>
        <TouchableOpacity
        onPress={()=> !carrito ? dispatch(addToCart(product)) :  dispatch(deleteFromCart(product))}
        style={{flexDirection: 'row'}}>
        {!carrito ?
        <Text style={{color: 'blue', fontWeight: 'bold', alignSelf: 'center', marginRight: 4}}>AGREGAR AL CARRITO</Text>
        :
        <Text style={{color: 'red', fontWeight: 'bold', alignSelf: 'center', marginRight: 4}}>ELIMINAR DEL CARRITO</Text>
        }
        {!carrito && <Icon name="add-circle-outline" size={25} color={'blue'} />}

        </TouchableOpacity>
      </View>
    </View>
  );
  }

export default Product;