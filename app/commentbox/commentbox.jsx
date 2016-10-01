import React, { Component, PropTypes } from 'react';
import UserStore from '../userStore/userStore.jsx';
import $ from 'jquery';

class CommentBox extends Component {
    loadComments() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    constructor(props, context) {
    super(props, context);
        this.state = {data: []};
    }

    componentDidMount() {
        this.loadComments();
        setInterval(this.loadComments, this.props.pollInterval);
    }

    render() {
        return (
            <div className="commentBox">
                <h2>Comments</h2>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        )
    }
}

class CommentList extends Component {
    render() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id} text={comment.text}></Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
}

class CommentForm extends Component {
    render() {
        return (
            <div className="commentForm">
            Hello, world! I am a CommentForm.
            </div>
        )
    }
}

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <h3 className="commentAuthor">
                    {this.props.author}
                </h3>
                {this.props.text}
            </div>
        )
    }
}
export default CommentBox
