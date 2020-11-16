import React from 'react';
import s from '../MyPosts/MyPosts.module.css';

const MyPosts = () => {
  return (
    
      <div>
        My post
      <div>
          New post
      </div>
        <div className={s.post} >
          <div className={s.item}>
            Post 1
          </div >
          <div className='item'>
            Post 2
          </div>
          <div className='item'>
            Post 3
          </div >
          <div className='item'>
            Post 4
          </div >
          <div className='item'>
            Post 5
          </div >
        </div>
      </div>
   
  );
}


export default MyPosts;