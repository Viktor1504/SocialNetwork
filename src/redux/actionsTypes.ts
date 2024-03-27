import {addPostAC, setUserProfile, updateNewPostTextAC} from './profileReducer';
import {sendMessageAC, updateNewMessageTextAC} from './dialogsReducer';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from './usersReducer';
import {setAuthUserData} from './authReducer';

export type SetAuthUserActionType = ReturnType<typeof setAuthUserData>

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | SetAuthUserActionType