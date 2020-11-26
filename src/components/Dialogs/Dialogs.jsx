import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog +' ' + s.active}>
                    Roma
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Kirill
                </div>
                <div className={s.dialog}>
                    Vlad
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}> hi</div>
                <div className={s.message}> how is your project</div>
                <div className={s.message}> good</div>
            </div>
        </div>



    )
}

export default Dialogs;