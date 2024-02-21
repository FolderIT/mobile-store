import React from 'react';
import { View, Text, Button } from 'react-native';

const Productos = ({ navigation }) => {
  return (
    <View>
      <Text>Productos</Text>
      <Button
        title="Ir al carrito"
        onPress={() => navigation.navigate('Carrito')}
      />
    </View>
  );
};

export default Productos;