import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getAllProducts = async (dispatch) => {
    AsyncStorage.setItem('useJwt', '1')
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      dispatch(setProducts(response.data))
    } catch (error) {
      const message = error
        ? error
        : 'ERROR GET PRODUCTS'
      console.log(message)
    }
  }

  export const setProducts = data => {
    return {
      type: 'SET_PRODUCTS',
      payload: data
    }
}

export const addToCart = data => {
  return {
    type: 'ADD_TO_CART',
    payload: data
  }
}

export const deleteFromCart = data => {
  return {
    type: 'DELETE_FROM_CART',
    payload: data
  }
}