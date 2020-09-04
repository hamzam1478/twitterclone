import React, { Component } from 'react';
import InputBox from './InputBox';
import Trends from './Trends';
import TrendingWorldWide from './TrendingWorldWide';
import TrendingTwo from './TrendingTwo';
import ShowMore from './ShowMore';
import Moon from './images/moon.jpg';
import Cat from './images/twocats.jpg';
import '../index.css';
import './TrendingWhole.css'



class TrendingWhole extends Component {
    render(){
        return (
            <div className="box">
                <InputBox/>
                <Trends />
  
                <TrendingWorldWide
                hashtag="BreakingNews"
                subtitle="Space" 
                description="Lunar photography improves the discovery of the moon"
                numberOfTweets=""
                numberOfPeople="10,094"
                image ={Moon}/>
  
                <TrendingTwo
                hashtag="WorldNews"
                numberOfTweets="125K Tweets"
                numberOfPeople="5,094"
                />
  
                <TrendingWorldWide 
                hashtag="BreakingNews"
                subtitle="Animals"
                description="These cats are ready for #internationalCatDay"
                numberOfTweets=""
                numberOfPeople="2,757"
                image ={Cat}/>
               
               <TrendingTwo
               hashtag="GreatestOfAllTime"
               numberOfTweets="100K Tweets"
               numberOfPeople="4,123"/>
  
                <ShowMore />
            </div>   
            
        )
    }
    
  }
 
  export default TrendingWhole