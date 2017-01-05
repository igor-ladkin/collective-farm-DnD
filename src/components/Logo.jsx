import React from 'react';
import Draggable from './Draggable';

const Logo = (props) => {
  return (
    <img
      src={props.logo}
      className="App-logo"
      alt="logo"
      style={props.style}
      draggable={false}
      onMouseOver={props.handleMouseOver}
      onMouseDown={props.handleMouseDown}
      onMouseUp={props.handleMouseUp}
      onMouseMove={props.handleMouseMove}
    />
  );
};

export default Draggable(Logo);
