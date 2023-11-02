import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRootStateType} from '../state/store';

type MapStateToPropsType = {
    isLoggedIn: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isLoggedIn, ...restProps} = props
        if (!isLoggedIn) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}