import React from 'react';
import Navigation from './src/navigation/navigation';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/stores/reducers';

export default function App() {
  return (
  <Provider store={store}>
   <Navigation />
    </Provider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

