import React, { Component } from 'react';

class Header extends Component {

    render() {
        let Header ={
            backgroundColor: "lightYellow",
            border: "4px solid green",
            borderRadius: "10%",
            width: "200px",
            height: "auto",
            margin: "15px",
            padding: "10px",
            textAlign: "Center"
             };
        let h1 ={
            fontSize: "15px",
            fontFamily: "Monospace",
            
        };
        return(
            <h1 style={Header}>Todo List</h1>
        )
    }
}

export default Header;