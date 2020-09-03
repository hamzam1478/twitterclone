import React from "react";
import "./Feed.css";
<<<<<<< Updated upstream
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";

function Feed() {
=======

/* import Post from "./Post.js";
 */
function Feed(props) {
>>>>>>> Stashed changes
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
<<<<<<< Updated upstream
        <h2>HOME</h2>

        {/* tweetbox */}
        <TweetBox />

        {/* post */}
        <Post />

        {/* post */}
        {/* post */}
=======
        <h1>{props.name}</h1>
        <img className="Avatar" src={props.avatar} alt="pfp"></img>
        <h3>{props.username}</h3>
        <h1>{props.feedname}</h1>
        <h2>{props.sentence}</h2>
        <img className="feedimg" src={props.image} alt="image"></img>
        <h3>{props.username}</h3>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default Feed;
