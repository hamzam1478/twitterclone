import React from "react";
import "./Post.css";
import simpsons from "./simpsons.gif";
import mouse from "./oldmickeyMouse.jpg";

function Post({ displayName, userName, text }) {
  return (
    <div className="post">
      <div className="postAvatar">
        <img className="postavatar" src={mouse} alt="avatar"></img>
        <div className="postBody">
          <div className="postHeader">
            <div className="headerText">
              <h3>
                Hamza Mahmood <span></span>
              </h3>
            </div>
            <div className="headerDescription">
              <p>
                {" "}
                This is how my life feels ever since I was introduced to a
                coding...
              </p>
            </div>
          </div>
          <img src={simpsons} alt="simpsons"></img>
        </div>
      </div>
    </div>
  );
}

export default Post;
