import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink className={s.d} to={path}>  {props.name}   </NavLink>
        </div>
    );
};

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div>
            <div className={s.message}> {props.message} </div>
        </div>
    );
};


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

    let dialogElement = dialogs.map( el  => {
        return (
            <DialogItem key={el.id} name={el.name} id={el.id}/>
        )
    })

    let messageElement = messages.map( el => {
        return (
            <Message key={el.id} message={el.message}/>
        )
    } )


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogElement}
                </div>
                <div className={s.messages}>
                    {messageElement}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;