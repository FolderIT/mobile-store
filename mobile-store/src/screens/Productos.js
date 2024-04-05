import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Productos = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#F5F5F5" }}>
      <Text style={{ marginVertical: 50, fontSize: 20, color: "black" }}>
        Aquí mostraremos la lista de productos disponibles
      </Text>
      <TouchableOpacity
        style={{ bottom: 20, position: "absolute" }}
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
    </View>
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
