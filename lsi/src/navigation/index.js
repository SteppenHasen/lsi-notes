import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import NotesView from '../notesView/notesView';
import AddNotes from "../addNotes/AddNotes";
import AddFolder from '../AddFolder/addFolder'

const StackNavigator = createStackNavigator({
    NotesView: {
        screen: NotesView
    },
    AddNotes: {
        screen: AddNotes
    },
    AddFolder: {
        screen: AddFolder
    }
},
{
    initialRouteName: 'NotesView',
    headerMode: 'none',
    mode: 'modal'
}
)

export default createAppContainer(StackNavigator)