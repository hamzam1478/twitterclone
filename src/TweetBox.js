import React from "react";
import "./TweetBox.css";
import mouse from "./oldmickeyMouse.jpg";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <h1>Welcome Hamza!</h1>
        <img className="avatar" src={mouse} alt="avatar"></img>
        <div className="tweetBox_input">
          <input placeholder="What's Happening?" type="text"></input>
        </div>
        <button className="tweetButton">TWEET</button>
      </form>
    </div>
  );
}

export default TweetBox;
