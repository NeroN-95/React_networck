import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/message/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.messages}>{props.message}</div>

}

const Dialogs = (props) => {

    let dialogsData = [
        {id : 1, name: 'Roma'},
        {id : 2, name: 'Vlad'},
        {id : 3, name: 'Kirill'},
        {id : 4, name: 'Viktor'},
        {id : 5, name: 'Alexandra'},
        {id : 6, name: 'Oleh'}
    ]
    let messageData = [
        {id : 1, message: 'hi'},
        {id : 2, message: 'how are you?'},
        {id : 3, message: 'what are you think about your dream ?'},

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name="Lev" id="3"/>
                <DialogItem name="Kirill" id="4"/>
                <DialogItem name="Di" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>

            </div>
        </div>
    )
}

export default Dialogs;