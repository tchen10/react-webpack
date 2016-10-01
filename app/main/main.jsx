import Styles from './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home/home.jsx';
import CommentBox from '../commentbox/commentbox.jsx';

var data = [
    {id: 1, author: "Pete Hunt", text: "This is a comment"},
    {id: 2, author: "Jordan Walke", text: "This is another comment"}
];

var url = "https://react-webpack-671a5.firebaseio.com/comments.json"

ReactDOM.render(<Home />, document.querySelector('#main'));
ReactDOM.render(<CommentBox pollInterval={2000} />, document.querySelector('#commentBox'));
