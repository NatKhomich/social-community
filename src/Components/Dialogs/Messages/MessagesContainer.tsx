import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator}
    from '../../../redux/dialogsPageReducer';
import {Messages} from './Messages';
import {StoreContext} from '../../../StoreContext';


export const MessagesContainer = () => {

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
};