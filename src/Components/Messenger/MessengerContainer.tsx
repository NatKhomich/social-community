import React from 'react';
import {sendMessageAC, updateNewMessageAC} from '../../redux/messengerPageReducer';
import {Messenger} from './Messenger';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {DialogType} from './DialogItem/DialogItem';
import {MessageType} from './MessageItem/MessageItem';


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
        newMessage: state.dialogsPage.newMessage
    }
}

export const MessengerContainer = connect(mapStateToProps,
    {
        onClickSendMessage: sendMessageAC,
        onChangeNewMessage: updateNewMessageAC,
        onKeyDownEnter: sendMessageAC
    })(Messenger);

/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickSendMessage: () => dispatch(sendMessageAC()),
        onChangeNewMessage: (newMessage: string) => dispatch(updateNewMessageAC(newMessage)),
        onKeyDownEnter: () => dispatch(sendMessageAC())
    }
}*/
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