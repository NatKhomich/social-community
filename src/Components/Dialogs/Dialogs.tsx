import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Messages/Message';

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Natalia'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Uliana'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Larisa'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'I love you'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ]

     return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>

                   <DialogItem dialogs = {dialogs} />

                </div>
                <div className={s.messages}>

                    <Message messages={messages} />

                </div>
            </div>
        </div>
    );
};

export default Dialogs;