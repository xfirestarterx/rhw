import React from 'react';
import './Post.css';

class Post extends React.Component {
    render() {
        const { title, body, username } = this.props;
        return (
            <div className='Post'>
                <div className='UserName'>{username}</div>
                <div className='PostTitle'>{title}</div>
                <div>{body}</div>
            </div>
        );
    }
}

export default Post;