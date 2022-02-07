import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import NotesView from '../notesView/notesView';
import AddNotes from "../addNotes/AddNotes";
import AddFolder from '../AddFolder/addFolder'
import LoginScreen from '../LoginScreen/LoginScreen'
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen'

const AppStack = createStackNavigator({
    NotesView: {
        screen: NotesView
    },
    AddNotes: {
        screen: AddNotes
    },
    AddFolder: {
        screen: AddFolder
    },
})

const AuthStack = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen
    },
    RegistrationScreen: {
        screen: RegistrationScreen
    }
})

export default createAppContainer(
    createSwitchNavigator(
        {
            App: AppStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'Auth',
        }
    )
)