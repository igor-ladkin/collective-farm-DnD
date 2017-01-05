import React, { Component } from 'react';

export default function(WrappedComponent) {
  class Draggable extends Component {
    constructor(props) {
      super(props);

      const { top, left } = this.props.initialPosition;
      this.state = {
        dragging: false,
        draggingStart: { top, left },
        style: { top, left },
      };

      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.handleMouseUp = this.handleMouseUp.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseOver(e) {
      this.setState({
        style: {...this.state.style, cursor: '-webkit-grab'}
      });
    }

    handleMouseDown(e) {
      const { top } = this.state.style

      this.setState({
        style: {...this.state.style, cursor: '-webkit-grabbing'},
        dragging: true,
        draggingStart: {
          left: e.pageX,
          top: e.pageY,
        },
      });
    }

    handleMouseUp(e) {
      this.setState({
        style: {...this.state.style, cursor: '-webkit-grab'},
        dragging: false,
      });
    }

    handleMouseMove(e) {
      if(!this.state.dragging) return

      const mousePosition = this.state.draggingStart;
      const elementPosition = this.state.style;
      const offset = {
        left: e.pageX - mousePosition.left,
        top: e.pageY - mousePosition.top,
      }

      this.setState({
        draggingStart: {
          top: e.pageY,
          left: e.pageX,
        },
        style: {
          ...this.state.style,
          top: elementPosition.top + offset.top,
          left: elementPosition.left + offset.left,
        },
      })
    }

    render() {
      const dragEventHandlers = {
        handleMouseOver: this.handleMouseOver,
        handleMouseDown: this.handleMouseDown,
        handleMouseUp: this.handleMouseUp,
        handleMouseMove: this.handleMouseMove,
      };

      return (
        <WrappedComponent {...this.props} {...dragEventHandlers} style={this.state.style} />
      );
    }
  };

  return Draggable;
}
