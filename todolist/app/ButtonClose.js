import React from 'react';



import {

  TouchableOpacity,
  StyleSheet,
  View,
  Image
} from 'react-native';

const ButtonClose = ({ onPress, renderImage }) => {


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container_2}
        onPress={onPress}>
        <Image source={renderImage} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: 'flex-end' },

  container_2: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: 50,
    height: 50
  },

  word: {
    fontSize: 20,
    color: 'grey'
  },

  image: {
    width: 10,
    height: 10,
    tintColor:'#2c2c2c'
  }

});

export default ButtonClose;