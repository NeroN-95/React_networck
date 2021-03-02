import React, {useEffect} from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
    useEffect(() => { console.log(props.users.length);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
           props.setUsers(response.data.items);

        });

    }, []);


    return (
        <div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                           <img src={u.photos.small !=null ? u.photos.small: userPhoto} className={styles.userPhoto}/>
                    </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
    )
}
export default Users;