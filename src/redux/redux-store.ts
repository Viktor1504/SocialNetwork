import {combineReducers, legacy_createStore} from 'redux';
import {dialogsReducer} from './dialogsReducer';
import {profileReducer} from './profileReducer';
import {sidebarReducer} from './sidebarReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const store = legacy_createStore(reducers)

export type AppRootStateType = ReturnType<typeof reducers>