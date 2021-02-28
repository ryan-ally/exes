import React, { Component } from 'react';
import data from "./data";
import png from './ap.png';

const socialMediaList = data.SocialMedias;

class Example1 extends Component {
	render() {
		return (
            <ul>        
            <img src={png} className="App-ap" alt="ap"/>
                {socialMediaList.map(s => (<li>{s}</li>))}
            </ul>
        );
    }
} 
export default Example1;