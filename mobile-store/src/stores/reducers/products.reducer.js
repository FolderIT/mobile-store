const initialState = {
    products: [],
    productsInCart: []
}

export const productsReducer = (state = initialState, action) => {
    const { payload } = action
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
              ...state,
              products: payload
            }
        case 'ADD_TO_CART':
          return {
            ...state,
            productsInCart: [...state.productsInCart, payload]
          }
          case 'DELETE_FROM_CART':
          return {
            ...state,
            productsInCart: state.productsInCart.filter(item => item !== payload)
          }
          default:
            return state; 
    }

}

export default productsReducer