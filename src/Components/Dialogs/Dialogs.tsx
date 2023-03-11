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
            <NavLink className={s.d} to={path}> {props.name}</NavLink>
        </div>
    );
};

type MessageType = {
    text: string
}

const Message = (props: MessageType) => {
    return (
        <div>
            <div className={s.message}> {props.text} </div>
        </div>
    );
};


const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    <DialogItem name={'Natalia'} id={1}/>
                    <DialogItem name={'Alex'} id={2}/>
                    <DialogItem name={'Katya'} id={3}/>
                    <DialogItem name={'Uliana'} id={4}/>
                    <DialogItem name={'Sergey'} id={5}/>
                    <DialogItem name={'Larisa'} id={6}/>
                </div>
                <div className={s.messages}>
                    <Message text={'Hi'}/>
                    <Message text={'I love you'}/>
                    <Message text={'How are you?'}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;