import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";

function Feed() {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>HOME</h2>

        {/* tweetbox */}
        <TweetBox />

        {/* post */}
        <Post />

        {/* post */}
        {/* post */}
      </div>
    </div>
  );
}

export default Feed;
