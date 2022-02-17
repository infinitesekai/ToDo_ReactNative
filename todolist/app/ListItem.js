import React, { useState } from 'react';

import {

    StyleSheet,
    Text,
    View,
} from 'react-native';

const ListItem = ({ item }) => {

    return (
        <View style={styles.item_cont}>
            <Text style={styles.title_style}>
                {item.title}
            </Text>
            <Text style={styles.sub_style}>
                {item.project}
            </Text>
            <Text style={styles.sub_style}>
                {item.date}
            </Text>
            
        </View>
    )
}

const styles = StyleSheet.create(
    {
        item_cont: {
            backgroundColor: 'white',
            borderRadius: 10,
            marginHorizontal: 20,
            padding: 10,
            marginVertical:5,
        
        },
        title_style: {
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            paddingStart: 20,
            margin: 5,
        },
        sub_style: {
            color: 'grey',
            paddingStart: 20,
            margin: 5,

        }

    }
)

export default ListItem