import React from 'react';

export default class CarouselArrow extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}>
          &rsaquo;
      </button>
    );
  }
}

