import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElemets = props.posts.map( p => <Post message={p.message} LikesCount={p.likesCount}/> );
    let newPostElement = React.createRef();


   let addPost = () => {

       props.dispatch({type:'ADD-POST'});

   }

   let onPostChange = () => {

       let text = newPostElement.current.value;
       let action = {type:'UPDATE-NEW-POST-TEXT', NewText : text};
       props.dispatch(action);

   }

    return (

        <div className={s.PostsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElemets}
            </div>
        </div>

    );
}


export default MyPosts;