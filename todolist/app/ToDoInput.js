import React, { useState, createContext, useContext } from 'react';
import ButtonDone from './ButtonDone';
import ButtonClose from './ButtonClose';
import DatePicker from 'react-native-date-picker'
import close from './close.png';
import calendar from './calendar.png';

import AppProvider, { useAppContext } from './AppContext';

import { Dropdown } from 'react-native-element-dropdown';

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,

} from 'react-native';
import Title from './Title';

const ToDoInput = ({ navigation }) => {


    const context = useAppContext();

    const [text, setText] = useState('');

    const [date, setDate] = useState(new Date());

    const [open, setOpen] = useState(false);

    const type = [{ label: 'Home', value: 'Home' },
    { label: 'School', value: 'School' },
    { label: 'Leisure', value: 'Leisure' }]


    const [value, setValue] = useState('Default');

    const handlePress = () => {

        if (text != '') {
            var newArray = [...context.data];
            newArray.push({ title: text, date: date.toDateString(), project: value });
            context.setData(newArray);

            console.log({ text })
            navigation.goBack()
        }
        else {
            if (text == '')
                alert('Nothing to do?')


        }


    }

    const handleClose = () => {
        navigation.goBack()
    }




    return (
        <SafeAreaView style={styles.area_cont}>


            <View style={styles.close_cont}>
                <ButtonClose onPress={handleClose} renderImage={close} />
            </View>

            <View style={styles.title1_cont}>
                <Title title={'To-do'} />
                <TextInput
                    style={styles.input}
                    placeholder='What to do...'
                    onChangeText={(newText) => setText(newText)}
                    value={text}
                />
            </View>

            <View style={styles.title2_cont}>



                <Title title={'Project'} />
                <Dropdown
                    style={styles.dropdown}

                    data={type}
                    maxHeight={190}
                    labelField="label"
                    valueField="value"
                    placeholder="Select project"
                    placeholderStyle={{ fontSize: 20, color: 'grey' }}
                    value={value}
                    selectedTextStyle={{ fontSize: 20, color: 'black' }}
                    onChange={item => {
                        setValue(item.value);
                    }}

                />
            </View>

            <View style={styles.title3_cont}>
                <Title title={'Deadline'} />
                <TouchableOpacity style={styles.date_cont}
                    onPress={() => setOpen(true)}>
                    <Text style={styles.date_dis}>{
                        date.toDateString()
                    }</Text>
                    <Image source={calendar} style={styles.image_cal} />

                </TouchableOpacity>

                <DatePicker
                    modal
                    mode="datetime"
                    open={open}
                    date={date}
                    minimumDate={new Date()}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>




            <View style={styles.done_cont}>
                <ButtonDone onPress={handlePress} title={'Done'} />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    area_cont: { flex: 1, backgroundColor: 'white' },

    close_cont: {

        alignItems: 'flex-end',

    },

    title1_cont: {
        margin: 10,
        marginStart: 10,
    },

    title2_cont: {
        margin: 5,
        marginStart: 10,
    },

    title3_cont: {
        flex: 4,
        margin: 5,
        marginStart: 10,
        marginTop: 10
    },


    input: {
        height: 50,
        marginStart: 5,
        margin: 5,
        marginTop:-5,
        borderWidth: 0.1,
        borderColor: '#f5f9fa',
        fontSize: 20,
        marginHorizontal:10,
        borderRadius: 10,
    },

    dropdown: {
        marginVertical: 10, 
        height: 50,
        borderRadius: 10,
        borderColor: '#f5f9fa',
        borderWidth: 1,
        padding: 20,
        marginHorizontal:10,


    },



    date_cont: {
        margin: 10,
        flexDirection: 'row',
        height: 50,
        borderWidth: 1,
        borderColor: '#f5f9fa',
        borderRadius: 10,
        justifyContent: 'center',
        width: 250,
        alignItems: 'flex-start',

    },

 

    date_dis: {
        fontSize: 20,
        marginTop: 10,
        color: 'black',
       
    },


    image_cal: {
        width: 25,
        height: 25,
        margin: 10,
        marginLeft: 40,
    },

    done_cont: {
        flex: 1,
        alignItems:'stretch',
        margin: 10,
        height: 350,
    },








});

export default ToDoInput;