import Styles from './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home/home.jsx';
import CommentBox from '../commentbox/commentbox.jsx';

ReactDOM.render(<Home />, document.querySelector('#main'));
ReactDOM.render(<CommentBox pollInterval={2000} />, document.querySelector('#commentBox'));
