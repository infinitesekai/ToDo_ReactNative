import React, { useState, createContext, useContext } from 'react';
import Header from './Header';
import ButtonAdd from './ButtonAdd';
import ListItem from './ListItem';
import AppProvider, { useAppContext } from './AppContext';

import CheckBox from '@react-native-community/checkbox';

import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,

} from 'react-native';

const Home = ({ navigation }) => {

    const data = useAppContext();
    console.log({ test: data.data })

    const handlePress = () => {
        navigation.navigate('ToDoInput');
    }

    const renderItem = ({ item }) => <ListItem item={item} />






    return (

        <SafeAreaView style={styles.area_cont}>

            <View style={styles.title}>
                <Header title={'Today'} />
            </View>

            <FlatList data={data.data} renderItem={renderItem}/>

            <View style={styles.button_cont}>
                <ButtonAdd onPress={handlePress} title={'+'} style={{ flex: 1 }} />
            </View>


        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    title: { marginTop: 20, marginBottom: 10 },
    area_cont: { flex: 1, backgroundColor: '#f5f9fa' },
    button_cont: { flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }
});

export default Home;