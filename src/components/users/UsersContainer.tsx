import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {
    followTC,
    getUsersTC,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowTC,
    UsersType
} from '../../redux/usersReducer';
import React, {Component, ComponentType} from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

class UsersContainer extends Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
                unfollowTC={this.props.unfollowTC}
                followTC={this.props.followTC}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingProgress,
        getUsersTC,
        unfollowTC,
        followTC
    }),
    WithAuthRedirect
)(UsersContainer)

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}
type MapDispatchPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userID: string) => void
    unfollowTC: (userID: string) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType