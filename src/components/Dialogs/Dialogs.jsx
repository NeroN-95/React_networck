import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Meassage/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    let DialogsElements= props.dialogs.map(dialog => <DialogItem name={dialog.name}  id={dialog.id} />);
    let messageElements = props.message.map( m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;