import {combineReducers, legacy_createStore} from 'redux';
import {dialogsReducer} from './dialogsReducer';
import {profileReducer} from './profileReducer';
import {sidebarReducer} from './sidebarReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

(window as any).store = store;