import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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