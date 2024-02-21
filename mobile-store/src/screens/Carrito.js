import React, { useEffect } from 'react';
import { Text, Button, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Product from '../components/Product';

const Carrito = ({ navigation }) => {

  const products = useSelector(
    state => state.productsReducer.productsInCart
  )

  return (
    <ScrollView style={{ backgroundColor: 'white'}}>
      {products.length>0 ?  products.map((element, index) => (
          <Product carrito key={index} product={element}/>
        ))
      :
       <Text style={{ fontSize: 18, color: "blue", alignSelf: 'center', marginVertical: 300 }}>
        Aún no tienes productos en el carrito</Text>
      
      }
      
      <Button
        title="Volver"
        onPress={() => navigation.navigate('Productos')}
      />
      </ScrollView>
  );
};

export default Carrito;