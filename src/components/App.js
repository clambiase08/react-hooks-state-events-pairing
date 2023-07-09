import { useState } from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import VideoDetails from "./VideoDetails.js";
import CommentList from "./CommentList.js";

function App() {
  console.log("Here's your data:", video);

  const initialVotes = {
    upvotes: video.upvotes,
    downvotes: video.downvotes,
  };

  const [votes, setVotes] = useState(initialVotes);
  const [commentList, setCommentList] = useState(true);


  function toggleComments() {
    setCommentList(prevCommentList => !prevCommentList)
  }


  return (
    <div className="App">
      <Video src={video.embedUrl} />
      <VideoDetails
        title={video.title}
        votes={votes}
        views={video.views}
        date={video.createdAt}
        commentList={commentList}
        toggleComments={toggleComments}
        onVote={setVotes}
        comments = {video.comments}
      />
    </div>
  );
}

export default App;
