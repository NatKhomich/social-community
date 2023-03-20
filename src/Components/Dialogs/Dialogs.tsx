import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem, DialogsType} from './DialogItem/DialogItem';
import {Message, MessagesType} from './Messages/Message';

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    <DialogItem dialogs={props.dialogs}/>
                </div>
                <div className={s.messages}>
                    <Message messages={props.messages}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;