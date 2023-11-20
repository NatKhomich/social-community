import React from 'react';
import {DialogType, MessageType, sendMessageAC} from './messengerReducer';
import {Messenger} from './Messenger';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../app/store';
import {withAuthRedirect} from '../../common/hoc/withAuthRedirect';
import {compose} from 'redux';
import {selectMessengerDialogs, selectMessengerMessages} from './messengerSelectors';


const MessengerContainer = (props: MessengerContainerType) => {
    return (
        <Messenger dialogs={props.dialogs} messages={props.messages} sendMessage={props.sendMessage} />
    )
}

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

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            sendMessage: sendMessageAC,
        }),
    withAuthRedirect
)(MessengerContainer)

