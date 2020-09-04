import React from 'react';
import './TrendingWorldWide.css';
import Radium from'radium';

const TrendingWorldWide = (props) => {
    const style={
        ':hover':{
            backgroundColor:'#e6ecf0'
        }
    }

    return (
        <div style={style} className="article">
            <p className="grey">Trending Worldwide</p>
            <p className="hashtag">#{props.hashtag}</p>

            <div className="smallerArticles">
                <h4 className="subtitle">{props.subtitle}</h4>
                <div className="description">
                <p>{props.description}</p> 
                </div>
                <img className="pic" src={props.image}></img>
            </div>
            
            <div className="articleBottom">
                <p className="grey">{props.numberOfTweets}</p>
                <p className="grey">{props.numberOfPeople} people are Tweeting about this</p>
            </div>
        </div>
    )
  
}

export default Radium(TrendingWorldWide)
