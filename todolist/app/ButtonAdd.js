import React from 'react';

import {

  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ButtonAdd = ({ onPress, title }) => {

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
  container: { justifyContent: 'flex-end' },

  container_2: {
    backgroundColor: '#0376f5',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 5,
    width: 50,
    height: 50
  },

  word: {
    fontSize: 20,
    color: 'white'
  },

});

export default ButtonAdd;