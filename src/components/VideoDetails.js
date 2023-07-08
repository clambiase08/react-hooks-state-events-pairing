import React from 'react'
import CommentList from './CommentList'

export default function VideoDetails({title, votes, views, date, comments, onVote}) {

    function handleVote(e) {
        if (e.target.value === "upvote") {
            const newVotes = {...votes};
            newVotes["upvotes"] += 1;
            onVote(newVotes);
        } else if (e.target.value === "downvote") {
            const newVotes = {...votes};
            newVotes["downvotes"] += 1;
            onVote(newVotes);
        }
    }


  return (
    <div>
        <h1>{ title }</h1>
        <p>{views} Views | Uploaded {date}</p>
        <p>
            <button onClick={handleVote} value="upvote">{votes.upvotes} 👍</button>
            <button onClick={handleVote} value="downvote">{votes.downvotes} 👎</button>
        </p>
        <p>
            <button>Hide Comments</button>
        </p>
        <hr />
        <ul className="comments"></ul>
        <CommentList comments={comments}/>
    </div>
  )
}
