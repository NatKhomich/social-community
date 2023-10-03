import React from 'react';
import {sendMessageAC, updateNewMessageAC} from '../../redux/messengerReducer';
import {Messenger} from './Messenger';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {DialogType} from './DialogItem/DialogItem';
import {MessageType} from './MessageItem/MessageItem';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

export type MessengerContainerType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}
type MapDispatchToPropsType = {
    onClickSendMessage: () => void
    onChangeNewMessage: (newMessage: string) => void
    onKeyDownEnter: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
    }
}

export const MessengerContainer = compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            onClickSendMessage: sendMessageAC,
            onChangeNewMessage: updateNewMessageAC,
            onKeyDownEnter: sendMessageAC
        }),
    withAuthRedirect
)(Messenger)

