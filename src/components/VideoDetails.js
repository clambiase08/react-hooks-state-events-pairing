import React from 'react'
import CommentList from './CommentList'

export default function VideoDetails({title, upvotes, downvotes, views, date, comments}) {
  return (
    <div>
        <h1>{ title }</h1>
        <p>{views} Views | Uploaded {date}</p>
        <p>
            <button>{upvotes} 👍</button>
            <button>{downvotes} 👎</button>
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
