import React from 'react';
import {sendMessageAC} from '../../redux/messengerReducer';
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
}
type MapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

export const MessengerContainer = compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            sendMessage: sendMessageAC,
        }),
    withAuthRedirect
)(Messenger)

