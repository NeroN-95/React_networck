import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {



    let postsElemets = props.posts.map( p => <Post message={p.message} LikesCount={p.likesCount}/> );
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
                {postsElemets}
            </div>
        </div>

    );
}


export default MyPosts;