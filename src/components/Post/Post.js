import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';

const Post = ({ title, body, username }) => {
    return (
        <div className='Post'>
            <div className='UserName'>{username}</div>
            <div className='PostTitle'>{title}</div>
            <div>{body}</div>
        </div>
    );
}

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    username: PropTypes.string
}

export default Post;
