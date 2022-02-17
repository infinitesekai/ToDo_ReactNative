import React from 'react';



import {

  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Button = ({ onPress, title }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container_2}
        onPress={onPress}>
        <Text style={styles.word}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  container_2: {
    backgroundColor: '#0376f5',
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  word: {
    fontSize: 20,
    color: 'white'
  },

});

export default Button;