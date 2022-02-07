import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    iconButton:{
        backgroundColor: '#219653',
        position: "absolute",
        right: 60,
        bottom: 0,
        margin: 20
    },
    title: {
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 5,
        fontSize: 20,
        paddingHorizontal: 10
    },
    text:{
        backgroundColor: '#fff',
        marginBottom: 5,
        borderRadius: 5,
        height: 300,
        fontSize: 16,
        paddingHorizontal: 10
    },
    fab: {
        position: "absolute",
        margin: 20,
        right: 0,
        bottom: 0
    },
    select: {
        marginTop: 10,
        borderRadius: 5,
        fontSize: 16,
        height: 40
    }
})