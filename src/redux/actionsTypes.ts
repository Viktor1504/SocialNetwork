import {addPostAC, setStatusAC, setUserProfile, updateNewPostTextAC} from './profileReducer';
import {sendMessageAC, updateNewMessageTextAC} from './dialogsReducer';
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from './usersReducer';
import {setAuthUserData, setIsLoggedInAC} from './authReducer';

export type ActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setIsLoggedInAC>