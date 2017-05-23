import React from 'react';
import { Link } from 'react-router-dom'

export default class SingleHead extends React.Component {

  renderVisit(props) {
    if(this.props.visit) {
      return <a className="linkTo r g" href={this.props.visit}>Visit &rsaquo;  </a>
    }
  }

  render() {
    return (
      <nav>
        <Link to="/" className="linkTo l g">&lsaquo;  Home</Link>
        {this.renderVisit()}
      </nav>
    )
  }
}

