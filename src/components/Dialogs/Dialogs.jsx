import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Meassage/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name}  id={d.id} />);
    let messageElements = props.state.message.map( m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
            </div>

        </div>
    )
}

export default Dialogs;