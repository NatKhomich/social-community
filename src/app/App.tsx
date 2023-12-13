import React from 'react';
import styles from './App.module.css'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {CircularProgress, LinearProgress} from '@mui/material';
import {AppRootStateType} from './store';
import {initializeAppTC, RequestStatusType} from './appReducer';
import {selectAppIsInitialized, selectAppStatus} from './appSelectors';
import Navbar from '../features/Navbar/Navbar';
import HeaderContainer from '../features/Header/HeaderContainer';
import ErrorSnackbar from "../common/components/ErrorSnackbar/ErrorSnackbar";
import {Routing} from "./routing/Routing";


type AppType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) {
            return <div style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
                <CircularProgress />
            </div>
        } else {
            return <div className={styles.root}>
                <HeaderContainer/>
                {this.props.status === 'loading' ? <LinearProgress color="primary"/> : ''}
                <div className={styles.container}>
                    <Navbar/>
                    <div className={styles.content}>
                        <Routing/>
                    </div>
                </div>
                <ErrorSnackbar/>
            </div>
        }
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        status: selectAppStatus(state),
        isInitialized: selectAppIsInitialized(state)
    }
}

type MapStateToPropsType = {
    status: RequestStatusType
    isInitialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        initializeApp: initializeAppTC
    })
)(App);