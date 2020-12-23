import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Card from './components/Card/Card';
import User from './components/User/User';

const App = () => {
  const [ state, setState ] = useState({
    isDataLoaded: false,
    users: [],
    posts: []
  });

  const updateState = newState => {
    setState({
      ...state,
      ...newState
    });

    // 1. Почему если тут законсолить state, то выведет предыдущий стейт?
  }

  const fetchData = async url => await fetch(url).then(response => response.json());

  useEffect(() => {
    (async () => {
      const users = await fetchData('https://jsonplaceholder.typicode.com/users');
      const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');

      updateState({
        isDataLoaded: true,
        users,
        posts
      });

      // 2. Почему если тут законсолить state, то выведет предыдущий стейт?
    })();
  }, []); // 3. При компиляции выводится предупреждение React Hook useEffect has a missing dependency: 'updateState'. Either include it or remove the dependency array. Но ведь если я уберу массив зависимостей, то этот эффект будет отрабатывать каждый ре-рендер, что я делаю не так? Вроде ж всё правильно?

  const logState = () => console.log(state)

  const { isDataLoaded, users, posts } = state;

  return (
    <BrowserRouter>
      <div onClick={logState}>log state</div>
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
  );
}
export default App;
