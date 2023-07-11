import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator}
    from '../../../redux/dialogsPageReducer';
import {Messages} from './Messages';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/reduxStore';
import {DialogsType} from '../../../types/Types';
import {Dispatch} from 'redux';


export type MessagesContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    dialogsPage: DialogsType
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

//создание контейнерной компоненты для Messages
export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


/*export const MessagesContainer = () => {

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
                return <Messages messages={state.messages}
                                 newMessage={state.newMessage}
                                 dialogs={state.dialogs}
                                 onClickSendMessage={onClickSendMessage}
                                 onChangeNewMessage={onChangeNewMessage}
                                 onKeyDownEnter={onKeyDownEnter}/>
            }}
        </StoreContext.Consumer>
    );
};*/