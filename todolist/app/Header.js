import React from 'react';



import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Header = ({ title }) => {

    return (

        <View style={styles.container}>
            <Text style={styles.font}>{title}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: { margin: 20 },
    font: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
        paddingStart: 5,
    }
});

export default Header;