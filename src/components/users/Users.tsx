import styles from './users.module.css';
import userPhoto from '../../assets/images/user.jpeg';
import React from 'react';
import {UsersPropsType} from './UsersContainer';

type ExtendedUsersPropsType = Omit<UsersPropsType, 'setUsers' | 'setTotalUsersCount' | 'setCurrentPage'> & {
    onPageChanged: (pageNumber: number) => void;
}

export const Users = (props: ExtendedUsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((p, index) => {
                return <span key={index}
                             className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={(e) => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
    <span>
        <div>
            <img src={userPhoto} className={styles.userPhoto}/>
    </div>
    <div>
    {u.followed
        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
        : <button onClick={() => props.follow(u.id)}>Follow</button>}
    </div>
    </span>
                <span>
    <span>
        <div>{u.name}</div>
    <div>{u.status}</div>
    </span>
    <span>
    <div>{'u.location.country'}</div>
    <div>{'u.location.city'}</div>
    </span>
    </span>
            </div>)
        }
    </div>
}