import React from "react";
import logo from '../Images/github.svg'
import portfolio from '../Images/Image.svg'
import '../App.css';

function IconGithub() {
    return(
        <img src={logo} className="App-icon" alt="GitHub link" />
    );
}

export {IconGithub};

function SecondIcon() {
    const varia = ""
    return(varia
    );
}

export {SecondIcon};

function AboutMeImg() {
    return(
    
        <img src={portfolio} className="PortImg"  alt="Portfolio"/>
    
        );
}

export {AboutMeImg}