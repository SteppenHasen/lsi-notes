import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function AddNotes() {
    return(
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Add Notes Screen</Text>
            </View>
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
    }
})