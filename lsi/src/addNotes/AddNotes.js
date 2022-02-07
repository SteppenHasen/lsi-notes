import React, { useState } from "react";
import { StyleSheet, View, Picker } from "react-native";
import { IconButton, FAB } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import styles from './styles';

import { storeData } from "../units/workWithData";

export default function AddNotes({navigation}) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')
    const [importance, setImportance] = useState('Select importance');
    const [theme, setTheme] = useState('Select theme');

    function onSaveNote() {
        let data = {
            title: noteTitle,
            content: noteDescription,
            importance: importance,
            theme: theme,
            date: Date.now().toLocaleString()
        }
        
        storeData(data)
        navigation.goBack()
    }

    return(
        <View style = {styles.container}>
            <TextInput
                placeholder = 'Add Note Name'
                value = {noteTitle}
                onChangeText = {setNoteTitle}
                mode = 'outlined'
                style = { styles.title }
            />
            <TextInput
                placeholder = 'Add Note Text'
                value = {noteDescription}
                onChangeText = {setNoteDescription}
                mode = 'flat'
                multiline = {true}
                style = { styles.text }
                scrollEnabled = {true}
                returnKeyLabel="done"
                blurOnSubmit = {true}
            />
            <Picker
                label = 'Select importance'
                style={styles.select}
                onValueChange={(itemValue) => setImportance(itemValue)}
            >
                <Picker.Item label="green" value="green" />
                <Picker.Item label="yellow" value="yellow" />
                <Picker.Item label="red" value="red" />
            </Picker>
            <Picker
                selectedValue={theme}
                style={styles.select}
                onValueChange={(itemValue) => setTheme(itemValue)}
            >
                <Picker.Item label="socion" value="socion" />
                <Picker.Item label="magic" value="magic" />
            </Picker>
            <FAB
                style = {styles.fab}
                small 
                icon = 'check'
                disabled = {noteTitle == '' ? true : false}
                onPress={() => onSaveNote()}
            />
            <IconButton
                icon = 'close'
                size = {26}
                color = 'white'
                onPress = {() => navigation.goBack()}
                style = {styles.iconButton}
            />
        </View>
    )
}
