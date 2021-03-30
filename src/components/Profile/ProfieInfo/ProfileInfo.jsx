import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader/>

    }

    return (

        <div>
            <div>
                <img
                    src='https://img5.goodfon.ru/wallpaper/big/e/5c/beach-beautiful-beach-ocean-beach-palm-tree-tropical-beach.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>

        </div>
    );
}

export default ProfileInfo;