import { useState } from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import VideoDetails from "./VideoDetails.js";

function App() {
  console.log("Here's your data:", video);

  const initialVotes = {
    upvotes: video.upvotes,
    downvotes: video.downvotes
  }

  const [votes, setVotes] = useState(initialVotes)
  console.log(votes)



  return (
    <div className="App">
      <Video src={video.embedUrl}/>
      <VideoDetails 
      title={video.title} 
      votes={votes} 
      views={video.views} 
      date={video.createdAt} 
      comments={video.comments} 
      onVote={setVotes}/>
    </div>
  );
}

export default App;
