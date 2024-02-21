import { combineReducers } from 'redux'
import productsReducer from './reducers/products.reducer'

const reducers = combineReducers({
   productsReducer,
})

export const rootReducer = (state, action) => {
    return reducers(state, action)
  }
export default rootReducer