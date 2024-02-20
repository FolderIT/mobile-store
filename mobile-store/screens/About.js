import React from 'react';
import { View, Text, Button } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View>
      <Text>About Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default About;