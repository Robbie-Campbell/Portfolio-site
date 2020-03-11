import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Projects from './Projects';

export default function Header() {
    return (
        <div style={headerStyle}>
            <h1 style={{fontSize: '60px', padding: '15px'}}>Robbie's Portfolio</h1>
      </div>
    )
}
    const headerStyle = {
        background: '#5D5C61',
        color: '#CCCCCC',
        height: '30vh',
        textAlign: 'center',
        padding: '30px'
        
    }