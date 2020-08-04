import React, { Component } from 'react';
import render from 'react-dom';

class TopMenu extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'Inkstellar'
    }
  }
  render(){
  return(
    <header>
      <nav>
      <div class="Logo">
      {this.state.name}
      </div>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
    </header>
  )}
}

export default TopMenu;