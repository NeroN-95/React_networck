import React from 'react';
import MyPosts from '../../MyPosts/MyPosts';
import s from '../Profile/Profile.module.css';


const Profile = () => {
  return (

    <div>
      <div>
        <img src='https://img5.goodfon.ru/wallpaper/big/e/5c/beach-beautiful-beach-ocean-beach-palm-tree-tropical-beach.jpg' />
      </div>
      <div>
        ava + description
    </div>
      <MyPosts />
    </div>
  );
}


export default Profile;