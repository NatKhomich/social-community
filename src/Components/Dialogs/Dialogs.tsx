import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Messages/Message';
import {DialogsPropsType} from '../../redux/State';


const Dialogs = (props: DialogsPropsType) => {

    const dialogItemElement = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>

                {dialogItemElement}

            </div>
            <div className={s.messages}>
                <Message messages={props.messages}
                         dispatch={props.dispatch}
                         newMessage={props.newMessage}

                />
            </div>
        </div>
    );
};

export default Dialogs;