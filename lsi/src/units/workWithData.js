import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('name', jsonValue)
    } catch (e) {
        console.log(e)
    }
}

export {storeData}