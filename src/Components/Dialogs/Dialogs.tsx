import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Messages/Message';
import {DialogsPropsType} from '../../redux/State';


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