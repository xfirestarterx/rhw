import React from 'react';
import './User.css';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import PropTypes from 'prop-types';

const User = ({ users, posts, isDataLoaded }) => {
    const params = useParams();

    if (!isDataLoaded) {
        return 'Loading...';
    } else {
        const currentId = Number(params.id);
        const currentUser = (users.filter(({id}) => id === currentId))[0];
        const currentPosts = posts.filter(( {userId} ) => userId === currentId);

        const {
            name,
            username,
            email,
            phone,
            website
        } = currentUser;

        return (
            <div className='User'>
                <div className='UserDetails'>
                    <i className='UserName'>{name}</i>
                    <i>Username: {username}</i>
                    <i>Email: {email}</i>
                    <i>Phone: {phone}</i>
                    <i>Website: {website}</i>
                </div>
                <div className='UserPosts'>
                    <div className='Title'>Posts</div>
                    {
                        currentPosts.map(({title, body}) => 
                            <Post key={Math.random()} title={title} body={body} username={username}/>)
                    }
                </div>
            </div>
        )
    }
}

User.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string,
            username: PropTypes.string,
            phone: PropTypes.string,
            website: PropTypes.string
        })
    ),
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string,
            username: PropTypes.string
        })
    ),
    isDataLoaded: PropTypes.bool.isRequired
}

export default User;