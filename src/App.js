import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Card from './components/Card/Card';
import User from './components/User/User';

class App extends React.Component {
  state = {
    isDataLoaded: false,
    users: [],
    posts: []
  };

  render() {
    const { isDataLoaded, users, posts } = this.state;

    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            { isDataLoaded ?
            <div className="CardsContainer">
              {users.map(user =>
                  <Card key={user.id} user={user} />
              )}
            </div> : 'Loading...' }
          </Route>

          <Route path='/user/:id'>
            <User posts={posts} users={users} isDataLoaded={isDataLoaded}/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

  async fetchData(url) {
    return await fetch(url).then(response => response.json());
  }

  async componentDidMount() {
    const users = await this.fetchData('https://jsonplaceholder.typicode.com/users');
    const posts = await this.fetchData('https://jsonplaceholder.typicode.com/posts');

    this.setState({
      isDataLoaded: true,
      users,
      posts
    });
  }
}

export default App;
