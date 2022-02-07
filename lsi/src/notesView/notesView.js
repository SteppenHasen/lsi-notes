import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, FAB } from "react-native-paper";
import styles from './styles';

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

