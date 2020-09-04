import React from "react";
import "./Feed.css";

/* import Post from "./Post.js";
 */
function Feed(props) {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h1>{props.name}</h1>
        <img className="Avatar" src={props.avatar} alt="pfp"></img>
        <h3>{props.username}</h3>
        <h1>{props.feedname}</h1>
        <h2>{props.sentence}</h2>
        <img className="feedimg" src={props.image} alt="image"></img>
        <h3>{props.username}</h3>
      </div>
    </div>
  );
}

export default Feed;
