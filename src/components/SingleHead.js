import React from 'react';
// import { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

export default class SingleHead extends React.Component {

  renderVisit(props) {
    if(this.props.visit) {
      return <a className="linkTo r g" href={this.props.visit}>Visit</a>
    }
  }

  render() {
    return (
      <div className="singleHead">
        <div className="banner">
          <span style={{backgroundImage: "url('../../../media/"+this.props.path+"/banner.png')"}}></span>
          <img src={"media/"+this.props.path+"/banner.png"} alt=""/>
        </div>

        <nav>
          <Link to="/portfolio" className="linkTo l g">Portfolio</Link>
          {this.renderVisit()}
        </nav>
      </div>
    )
  }
}
