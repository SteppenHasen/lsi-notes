import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, FAB } from "react-native-paper";

export default function NotesView({ navigation }) {
    return(
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>You do not have any notes</Text>
            </View>
            <FAB
                style = {styles.fab2}
                small
                icon = 'folder'
                label = 'Add a new Note'
                onPress = {() => navigation.navigate('AddFolder')}
            />
            <FAB
                style = {styles.fab}
                small
                icon = 'plus'
                label = 'Add a new Note'
                onPress = {() => navigation.navigate('AddNotes')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    titleContainer:{
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab: {
        position: "absolute",
        margin: 20,
        right: 0,
        bottom: 10,
        backgroundColor: '#219653'
    },
    fab2: {
        position: "absolute",
        margin: 20,
        right: 0,
        bottom: 70,
        backgroundColor: '#219653'
    }
})