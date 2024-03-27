import {Profile} from './Profile';
import {ProfileType, setUserProfile} from '../../redux/profileReducer';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';

const ProfileContainer = (props: PropsType) => {
    const {userId} = useParams<ParamsType>()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId || 2}`)
            .then(res => {
                props.setUserProfile(res.data)
            })
    }, [userId])

    return <Profile profile={props.profile}/>
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({profile: state.profilePage.profile})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

type ParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType