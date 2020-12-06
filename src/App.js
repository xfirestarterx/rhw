import React from 'react';
import { useState } from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import CardsContainer from "./components/CardsContainer/CardsContainer";

class App extends React.Component {
  state = {
    isDataLoaded: false,
    users: [],
    posts: []
  };

  render() {
    return(
      <div>{this.state.isDataLoaded ? 'loaded' : 'Loading'}</div>
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
