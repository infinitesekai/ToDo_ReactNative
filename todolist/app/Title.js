import React from 'react';



import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Title = ({ title }) => {

  return (

    <View >
      <Text style={styles.font}>{title}</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  container: { margin: 20 },
  
  font: {
    margin: 10,
    fontSize: 15,
  }
});

export default Title;