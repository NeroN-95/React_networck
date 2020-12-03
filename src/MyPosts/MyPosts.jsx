import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'hi how are you?', likesCount: 11},
        {id: 2, message: 'hi its my post', likesCount: 12},
    ]
    return (

        <div className={s.PostsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message={postsData[0].message} LikesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} LikesCount={postsData[1].likesCount}/>

            </div>
        </div>

    );
}


export default MyPosts;