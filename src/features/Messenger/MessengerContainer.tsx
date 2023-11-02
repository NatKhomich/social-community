import React from 'react';
import {sendMessageAC} from './messengerReducer';
import {Messenger} from './Messenger';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../app/store';
import {DialogType} from './DialogItem/DialogItem';
import {MessageType} from './MessageItem/MessageItem';
import {withAuthRedirect} from '../../common/hoc/withAuthRedirect';
import {compose} from 'redux';
import {selectMessengerDialogs, selectMessengerMessages} from './messengerSelectors';

export type MessengerContainerType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
type MapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogs: selectMessengerDialogs(state),
        messages: selectMessengerMessages(state),
    }
}

export const MessengerContainer = compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            sendMessage: sendMessageAC,
        }),
    withAuthRedirect
)(Messenger)

