import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, IconButton, FAB } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";

export default function AddNotes({navigation}) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')

    function onSaveNote() {
        navigation.state.params.addNote({noteTitle, noteValue})
        navigation.goBack()
    }

    return(
        <View style = {styles.container}>
            <TextInput
                label = 'Add Note Name'
                value = {noteTitle}
                onChangeText = {setNoteTitle}
                mode = 'outlined'
                style = { styles.title }
            />
            <TextInput
                label = 'Add Note Name'
                value = {noteDescription}
                onChangeText = {setNoteDescription}
                mode = 'flat'
                multiline = {true}
                style = { styles.text }
                scrollEnabled = {true}
                returnKeyLabel="done"
                blurOnSubmit = {true}
            />
            <FAB
                style = {styles.fab}
                small 
                icon = 'check'
                disabled = {noteTitle == '' ? true : false}
                onPress={() => onSaveNote()}
            />
            <IconButton
                icon = 'close'
                size = {25}
                color = 'white'
                onPress = {() => navigation.goBack()}
                style = {styles.iconButton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    iconButton:{
        backgroundColor: '#219653',
        position: "absolute",
        right: 0,
        bottom: 60,
        margin: 20
    },
    titleContainer:{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    title: {
        fontSize: 20,
    },
    text:{
        height: 300,
        fontSize: 16
    },
    fab: {
        position: "absolute",
        margin: 20,
        right: 0,
        bottom: 0
    }
})