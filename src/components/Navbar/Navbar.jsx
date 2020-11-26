import React from 'react';
import s from'./Navbar.module.css';


const Navbar = () => {
  return (
    
    <div  className={s.nav}>
<div className={s.item}>
  <a href="/profile" >Profile</a>
</div>
<div  className={`${s.item} ${s.active}`}>
  <a href="/message">Messages</a>
</div>
<div  className={s.item}>
  <a href="/news">News</a>
</div>
<div  className={s.item}>
  <a>Music</a>
</div>
<div  className={s.item}>
  <a>Settings</a>
</div>
    </div>
  );
}


export default Navbar;