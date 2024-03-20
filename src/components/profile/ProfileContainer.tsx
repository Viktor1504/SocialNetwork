import React, {Component} from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';
import {AppRootStateType} from '../../redux/redux-store';

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let params = useParams()
        return <Component {...props} params={{params}}/>
    }

    return ComponentWithRouterProp
}

class ProfileContainer extends Component<any> {

    componentDidMount() {
        debugger
        const userId = this.props.params.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                debugger
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))