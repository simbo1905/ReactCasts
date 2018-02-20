import React, { Component } from "react";
import quotes from "./randomquotes.js"

var Comment = React.createClass({
    render: function () {
        return (
            <div>
                <h2>{ this.props.author }</h2>
                <p>{ this.props.content } </p>
            </div>
        )
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.comments.map(function ( comment ) {
            return <Comment author={ comment.author } content={ comment.content } key={ comment.id } />
        });

        return (
            <div className="comment-list">
                { commentNodes }
            </div>
        )
    }
});

var CommentBox = React.createClass({
    render: function() {
        return (
            <html><head><title>Comments</title></head>
            <body><p>
            <CommentList comments={quotes}/>
            </p></body>
            </html>
        )
    }
});

export default CommentBox;