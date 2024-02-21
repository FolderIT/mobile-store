import React from 'react';
import { View, Text, Button } from 'react-native';

const Carrito = ({ navigation }) => {
  return (
    <View>
      <Text>Carrito</Text>
      <Button
        title="Volver"
        onPress={() => navigation.navigate('Productos')}
      />
    </View>
  );
};

export default Carrito;