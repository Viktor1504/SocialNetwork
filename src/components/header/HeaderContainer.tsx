import {Component} from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import axios from 'axios';
import {AppRootStateType} from '../../redux/redux-store';
import {AuthStateType, setAuthUserData} from '../../redux/authReducer';

class HeaderContainer extends Component<AuthPropsType> {
    componentDidMount() {
        axios.get<ResponseType<AuthStateType>>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    auth: state.auth
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
type MapStatePropsType = {
    auth: AuthStateType
}
type MapDispatchPropsType = {
    setAuthUserData: (data: AuthStateType) => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType
