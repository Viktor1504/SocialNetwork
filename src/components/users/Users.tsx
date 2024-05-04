import styles from './users.module.css';
import userPhoto from '../../assets/images/user.jpeg';
import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';
import {Button, Card, CardActions, CardContent, Grid, Pagination, Typography} from '@mui/material';

type ExtendedUsersPropsType =
    Omit<UsersPropsType, 'getUsersTC' | 'setUsers' | 'setTotalUsersCount' | 'setCurrentPage'>
    & {
    onPageChanged: (pageNumber: number) => void;
}

export const Users: React.FC<ExtendedUsersPropsType> = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Pagination
                    count={pagesCount}
                    page={props.currentPage}
                    onChange={(event, page) => props.onPageChanged(page)}
                    color="primary"
                    size="large"
                />
            </Grid>
            {props.users.map((u) => (
                <Grid key={u.id} item xs={6}>
                    <Card>
                        <CardContent>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : userPhoto}
                                    alt="user"
                                    style={{width: '100%', borderRadius: '50%'}}
                                />
                            </NavLink>
                            <Typography variant="h6" gutterBottom>
                                {u.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {u.status}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {'u.location.country, u.location.city'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {u.followed
                                ? <Button
                                    size="small"
                                    color="primary"
                                    disabled={props.followingInProgress.some((id) => id === u.id)}
                                    onClick={() => props.unfollowTC(u.id)}
                                >
                                    Unfollow
                                </Button>
                                : <Button
                                    size="small"
                                    color="primary"
                                    disabled={props.followingInProgress.some((id) => id === u.id)}
                                    onClick={() => props.followTC(u.id)}
                                >
                                    Follow
                                </Button>
                            }
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

// export const Users = (props: ExtendedUsersPropsType) => {
//     const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
//     let pages = []
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//
//     return <div>
//         <Pagination
//             count={pagesCount}
//             page={props.currentPage}
//             onChange={(event, page) => props.onPageChanged(page)}
//             color="primary"
//         />
//         {
//             props.users.map(u => <div key={u.id}>
//     <span>
//         <div>
//             <NavLink to={'/profile/' + u.id}>
//                 <img src={u.photos.small != null ? u.photos.small : userPhoto}
//                      className={styles.userPhoto}/>
//             </NavLink>
//     </div>
//     <div>
//     {u.followed
//         ? <button disabled={props.followingInProgress
//             .some(id => id === u.id)}
//                   onClick={() => props.unfollowTC(u.id)
//                   }>Unfollow</button>
//         : <button disabled={props.followingInProgress
//             .some(id => id === u.id)}
//                   onClick={() => props.followTC(u.id)
//                   }>Follow</button>}
//     </div>
//     </span>
//                 <span>
//     <span>
//         <div>{u.name}</div>
//     <div>{u.status}</div>
//     </span>
//     <span>
//     <div>{'u.location.country'}</div>
//     <div>{'u.location.city'}</div>
//     </span>
//     </span>
//             </div>)
//         }
//     </div>
// }