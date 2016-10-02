import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

var url = "https://react-webpack-671a5.firebaseio.com/comments.json";

class CommentBox extends Component {
    loadComments() {
        $.ajax({
            url: url,
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

    handleCommentSubmit(comment) {
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',
            data: comment,
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
        this.loadComments = this.loadComments.bind(this)
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    }

    componentDidMount() {
        this.loadComments();
        // setInterval(this.loadComments, this.props.pollInterval);
    }

    render() {
        return (
            <div className="commentBox">
                <h2 id="commentHeader">Comments</h2>
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                <CommentList data={this.state.data}/>
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
    constructor(props, context) {
        super(props, context);
        this.state = {
            author: '',
            text: ''
        };
        this.handleAuthorChange = this.handleAuthorChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleSubmit = this.handleSubmit(this)
    }

    handleAuthorChange(e) {
        this.setState({author: e.target.value});
    }

    handleTextChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        // Error: e.preventDefault is not a function
        // e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
          return;
        }
        // TODO: send request to the server
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    }

    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}/>
                <input type="text" placeholder="Say something" value={this.state.text} onChange={this.handleTextChange}/>
                <input type="submit" value="post"/>
            </form>
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
