import React, { Component } from 'react';
import './style.css';



class Card extends Component {
    render() {
        return (
            <div className="card">
                <h1>{this.props.cardTitle}</h1>
                <p>{this.props.cardContent}</p>
            </div>
        );
    }
}

export default Card;