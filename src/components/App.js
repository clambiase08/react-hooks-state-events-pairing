import video from "../data/video.js";
import Video from "./Video.js";
import VideoDetails from "./VideoDetails.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video src={video.embedUrl}/>
      <VideoDetails title={video.title} upvotes={video.upvotes} downvotes={video.downvotes} views={video.views} date={video.createdAt} comments={video.comments} />
    </div>
  );
}

export default App;
