import React from 'react'


const Spotlight = ({ title, rating, image, onPlayClick, onListClick, onInfoClick}) => {
    return (
        <div className="spotlight"> 
            <img src={imgUrl} alt=""/>
            <div className="gradient"></div>
            <div className="info"></div>
                <h1 className="title">{title}</h1>
                <p className="rating">{rating}</p>
                <div className="actions">
                    <button onCLick={onPlayClick}>Play</button>
                    <button onCLick={onListClick}>My List</button>
                    <button onClick={onInfoClick}>Info</button>
                </div>
        </div>
    )
}

export default Spotlight;