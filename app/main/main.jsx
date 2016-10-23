import Styles from './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home/home.jsx';
// import CommentBox from '../commentbox/commentbox.jsx';

import store from '../todos/store.js';
import TodoApp from '../todos/todos.jsx';

ReactDOM.render(<Home />, document.querySelector('#main'));
// ReactDOM.render(<CommentBox pollInterval={2000} />, document.querySelector('#commentBox'));

const render = () => {
    // passing every state field inside the state object as a prop instead of doing it explicity i.e. todos=... visibilityFilter=...
    ReactDOM.render(<TodoApp {...store.getState()} />, document.querySelector('#todos'));
};
store.subscribe(render);
render();
