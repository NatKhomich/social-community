import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPropsType} from '../../types/Types';
import {MessagesContainer} from './Messages/MessagesContainer';


const Dialogs = (props: DialogsPropsType) => {

    const dialogItemElement = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItemElement}
            </div>
            <div className={s.messages}>
                {/*<Messages messages={props.messages}
                          dispatch={props.dispatch}
                          newMessage={props.newMessage}
                />*/}
                <MessagesContainer messages={props.messages}
                                   newMessage={props.newMessage}
                                   dispatch={props.dispatch}
                />
            </div>
        </div>
    );
};

export default Dialogs;