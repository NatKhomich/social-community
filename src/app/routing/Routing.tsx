import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {withSuspense} from "../../common/hoc/withSuspense";
import {Music} from "../../features/Music/Music";
import {News} from "../../features/News/News";
import {Settings} from "../../features/Settings/Settings";
import imageError from "../../common/image/404.jpg";
import {NotFound404} from "../../common/components/NotFound404/NotFound404";

const ProfileContainer = React.lazy(() => import('../../features/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('../../features/Users/UsersContainer'))
const MessengerContainer = React.lazy(() => import('../../features/Messenger/MessengerContainer'))
const Login = React.lazy(() => import('../../features/Auth/Login'))

export const Routing = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>

            <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
            <Route path={'/messenger'} render={withSuspense(MessengerContainer)}/>
            <Route path={'/users'} render={withSuspense(UsersContainer)}/>
            <Route path={'/login'} render={withSuspense(Login)}/>

            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>

            <Route path="/404" render={() => <img src={imageError} alt="error"/>}/>
            <Route path="*" render={() => <NotFound404/>}/>
        </Switch>
    );
};

