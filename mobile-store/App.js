import React from 'react';
import Navigation from './navigation/navigation';
import { StyleSheet } from 'react-native';

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
