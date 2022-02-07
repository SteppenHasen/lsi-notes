import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import styles from './styles';

export default function AddFolder() {
    return(
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Add Folder Screen</Text>
            </View>
        </View>
    )
}
