import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator}
    from '../../redux/messengerPageReducer';
import {Messenger} from './Messenger';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';
import {MessengerType} from '../../types/Types';


export type MessengerContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    dialogsPage: MessengerType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type MapDispatchToPropsType = {
    onClickSendMessage: () => void
    onChangeNewMessage: (newMessage: string) => void
    onKeyDownEnter: () => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickSendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        onChangeNewMessage: (newMessage: string) => {
            dispatch(updateNewMessageActionCreator(newMessage))
        },
        onKeyDownEnter: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

//создание контейнерной компоненты для Messenger
export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);


/*export const MessengerContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {

                let state = store.getState().dialogsPage

                const onClickSendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                const onChangeNewMessage = (newMessage: string) => {
                    store.dispatch(updateNewMessageActionCreator(newMessage))
                }
                const onKeyDownEnter = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                return <Messenger messages={state.messages}
                                 newMessage={state.newMessage}
                                 dialogs={state.dialogs}
                                 onClickSendMessage={onClickSendMessage}
                                 onChangeNewMessage={onChangeNewMessage}
                                 onKeyDownEnter={onKeyDownEnter}/>
            }}
        </StoreContext.Consumer>
    );
};*/