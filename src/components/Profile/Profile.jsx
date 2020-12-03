import React from 'react';
import MyPosts from '../../MyPosts/MyPosts';
import ProfileInfo from "./ProfieInfo/ProfileInfo";


const Profile = () => {
    return (

        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}


export default Profile;