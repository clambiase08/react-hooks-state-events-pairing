import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments, commentList }) {

  const commentEl = comments.map((comment) => {
    return (
      <Comment key={comment.id} user={comment.user} comment={comment.comment} />
    );
  });

  return (
    <div>
      <h2>{comments.length} Comments</h2>
      {commentList ? commentEl : ""}
    </div>
  );
}
