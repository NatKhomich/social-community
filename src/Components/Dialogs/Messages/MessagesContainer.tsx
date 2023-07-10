import React from 'react';
import {MessagesPropsType} from '../../../types/Types';
import {sendMessageActionCreator, updateNewMessageActionCreator}
    from '../../../redux/dialogsPageReducer';
import {Messages} from './Messages';


export const MessagesContainer = (props: MessagesPropsType) => {

    const onClickSendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onChangeNewMessage = (newMessage: string) => {
        props.dispatch(updateNewMessageActionCreator(newMessage))
    }

    const onKeyDownEnter = () => {
        props.dispatch(sendMessageActionCreator())
    }

    return (
        <Messages messages={props.messages}
                  newMessage={props.newMessage}
                  onClickSendMessage={onClickSendMessage}
                  onChangeNewMessage={onChangeNewMessage}
                  onKeyDownEnter={onKeyDownEnter}

        />
    );
};