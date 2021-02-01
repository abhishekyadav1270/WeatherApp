import React from 'react'
import img1 from './pics/forecastbg.jpg'
import './card-style.css';
export default function CardUI() {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={img1} alt="forecastImage"className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                    card body
                </p>
                <button className="btn-outline-success">click me</button>
            </div>

        </div>
    )
}
