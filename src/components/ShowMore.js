import React from 'react'
import './ShowMore.css'
import Radium from 'radium'

const ShowMore = (props) => {
    const style={
        ':hover':{
            backgroundColor:'#e6ecf0'
        }}
    return (
        <div style={style} className="link">
            <p><a href="#">Show more</a></p>
        </div>
    )
}

export default Radium(ShowMore)
