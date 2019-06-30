import React, { Component } from 'react';
import Card from './Card';
import './style.css';

class Container extends Component {
    componentDidMount() {
        console.log("props",this.props);
    }
    render() { 
        return (
            <div className="container">
                <Card cardTitle="Languages" cardContent={this.props.languages} />
                <Card cardTitle="Editors" cardContent={this.props.editors} />
                <Card cardTitle="Best Day" cardContent={this.props.bestDay} />
            </div>
        );
    }
}

export default Container;