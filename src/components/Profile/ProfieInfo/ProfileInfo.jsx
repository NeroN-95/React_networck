import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (

        <div>
            <div>
                <img
                    src='https://img5.goodfon.ru/wallpaper/big/e/5c/beach-beautiful-beach-ocean-beach-palm-tree-tropical-beach.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;