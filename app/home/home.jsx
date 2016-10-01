import React, { Component, PropTypes } from 'react'
import UserStore from '../userStore/userStore.jsx';

class Home extends Component {

  render() {
    const {name} = UserStore.getState();

    return (
      <h1 id="welcome">Welcome, {name}</h1>
    )
  }
}

export default Home
