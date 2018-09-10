import React, { Component } from 'react';
import ToDoList from './ToDoList';
import Header from './header';

class App extends Component {
  render() {
        let container ={
          width: "400px",
          heigth: "auto",
          backgroundColor: "lightBlue",
          border: "1px inset green",
          borderRadius: "8%"
        };
    return (
      <div style={container}>
        <Header/>
        <ToDoList/>
        
      </div>
    );
  }
}

export default App;
