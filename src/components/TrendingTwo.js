import React from 'react'
import './TrendingTwo.css'
import Radium from'radium';

const TrendingTwo = (props) => {
    const style={
        ':hover':{
            backgroundColor:'#e6ecf0'
        }}
    return (
        
            <div style={style} className="articleTwo">
            <p className="grey">Trending Worldwide</p>
            <p className="hashtagTwo">#{props.hashtag}</p>

            <div className="articleBottom">
                <p className="grey">{props.numberOfTweets}</p>
                <p className="grey">{props.numberOfPeople} people are Tweeting about this</p>
            </div>
            
        </div>
    )
}

export default Radium(TrendingTwo)
