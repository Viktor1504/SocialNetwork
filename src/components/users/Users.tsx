import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './users.module.css'

const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: crypto.randomUUID(),
                photoUrl: 'https://cs14.pikabu.ru/post_img/2023/10/28/2/169845643817422827.jpg',
                followed: false,
                fullName: 'Victor',
                status: 'I\'m best',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: crypto.randomUUID(),
                photoUrl: 'https://cs14.pikabu.ru/post_img/2023/10/28/2/1698456437192888944.jpg',
                followed: true,
                fullName: 'Mikola',
                status: 'I\'m best too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: crypto.randomUUID(),
                photoUrl: 'https://cs13.pikabu.ru/post_img/2023/10/28/2/1698456436157896452.jpg',
                followed: false,
                fullName: 'Petya',
                status: 'I\'m best tooooo',
                location: {city: 'Moscow', country: 'Russia'}
            }])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users