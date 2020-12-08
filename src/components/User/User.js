import React from 'react';
import './User.css';
import { withRouter } from 'react-router-dom';
import Post from '../Post/Post';

class User extends React.Component {
    render() {
        const { users, posts, isDataLoaded } = this.props;
        if (!isDataLoaded) {
            return 'Loading...';
        } else {
            const currentId = Number(this.props.match.params.id);
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
}

export default withRouter(User);