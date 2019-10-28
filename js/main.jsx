import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test';
import Image from './image'
import Home from './home'

ReactDOM.render(
  // <Image title="Untitled [Four children in costumes]" artist="Guy Krogh" year={1952} 
  // filename="Untitled_4_children_in_Costume.jpg" analysis="Children in domestic space, exploring"/>,
  <Home />,
  document.getElementById('reactEntry'),
);
