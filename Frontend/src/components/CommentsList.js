import React from 'react';
// CommentsList is the component; the 1 prop it takes is the comments
const CommentsList = ({ comments }) => (
    <>
    <h3>Comments:</h3>
    {comments.map((comment, key) => (
        <div className="comment" key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;

// since we return more than one element we wrap it all in React fragments with the <></>
// we had to add a key on line 6 because we're using map
// don't forget to add this entire component to ArticlePage.js