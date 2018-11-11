import React, { Component } from 'react';
import './Scorecard.css'

const Scorecard = (props) => {
    const { player1Name, player1Score, player1Sets, player2Name, player2Score, player2Sets } = props
    
    return (
        <div className="scorecard">
            <div className="blockDiv">
                <span className="name">{player1Name}</span>
                <span className="score">{player1Score}</span> 
                <span className="sets">{player1Sets}</span> 
            </div>
            <div className="blockDiv">
                <span className="name">{player2Name}</span>
                <span className="score">{player2Score}</span> 
                <span className="sets">{player2Sets}</span> 
            </div>
        </div>
    )
}

export default Scorecard
