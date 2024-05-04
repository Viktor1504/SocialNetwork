import {Component} from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {AuthStateType, getAuthUserDataTC} from '../../redux/authReducer';

class HeaderContainer extends Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    auth: state.auth
})

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer)


type MapStatePropsType = {
    auth: AuthStateType
}
type MapDispatchPropsType = {
    getAuthUserDataTC: () => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType