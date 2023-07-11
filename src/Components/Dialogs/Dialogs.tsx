import React from 'react';
import s from './Dialogs.module.css';
import {MessagesContainer} from './Messages/MessagesContainer';


const Dialogs = () => {

    /*const dialogItemElement = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
               {/* {dialogItemElement}*/}

            </div>
            <div className={s.messages}>
                {/*<Messages messages={props.messages}
                          dispatch={props.dispatch}
                          newMessage={props.newMessage}
                />*/}
                <MessagesContainer />
            </div>
        </div>
    );
};

export default Dialogs;