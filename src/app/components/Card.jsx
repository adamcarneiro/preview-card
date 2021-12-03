import React from 'react'
// import ReactDOM  from 'react-dom'
import clock from "../assets/images/icon-clock.svg"
import prism from '../assets/images/icon-ethereum.svg'

export default function Card(){
    return (
        <div className="card-container">
            <div className="image-container"></div> 
            
            <h1 className="title-content">Equilibrium #3429</h1>
            <p className="text-content" >Our Equilibrium collection promotes balance and calm.</p>
            
            <div className="points-container">
                <p className="coins test"><img src={prism} alt="prism icon" />0.042 ETH</p>
                <p className="text-content test"><img src={clock} alt="clock icon" /> 3 days left</p>
            </div>
            <div className="user-information">
                <div className="photo-container"></div>
                <p><span>Creation of</span> Adamastor Chimalange</p>
            </div>
        </div>
    )
}