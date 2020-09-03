import React from "react";
import "./App.css";
import Feed from "./Feed";
<<<<<<< Updated upstream

function App() {
  return (
    <div className="app">
      <Feed />
    </div>
=======
import simpsons from "./simpsons.gif";
import TweetBox from "./TweetBox.js";
import imran from "./imran.png";
import mouse from "./oldmickeyMouse.jpg";
import history from "./hentri.jpg";
import danielpfp from "./danielpfp.jpeg";
import marriage from "./married.jpg";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <TweetBox />
        <Feed
          username={"@hamzam1478"}
          sentence={"This is what coding does to me everyday."}
          feedname={"Hamza Mahmood"}
          image={simpsons}
          avatar={mouse}
        />
        <div classname="imransfeed">
          <Feed
            username={"@imran123"}
            sentence={
              "Exploring through a historic landmark which was founded in 1918. This picture was taken in the resturant, which still operates today and looks really nice!"
            }
            feedname={"Imran Nawaz"}
            image={history}
            avatar={imran}
          />
          <Feed
            username={"@Daniel145"}
            sentence={
              "My sister got married today, eyes full of tears of joy and tears. Mostly tears... Who am I going to annoy now :("
            }
            feedname={"Daniel Davis"}
            image={marriage}
            avatar={danielpfp}
          />
        </div>
      </div>
    </React.Fragment>
>>>>>>> Stashed changes
  );
}

export default App;
