import React from 'react';
// import { Component } from 'react';
import CarouselArrow from './CarouselArrow'
var Slider = require('react-slick');
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

export default class SingleHead extends React.Component {

  renderVisit(props) {
    if(this.props.visit) {
      return <a className="linkTo r g" href={this.props.visit}>Visit &rsaquo;  </a>
    }
  }

  renderCarousel(props) {
    var images = this.props.images
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      accessibility: true,
      // centerMode: true,
      focusOnSelect: true,
      prevArrow:<CarouselArrow/>,
      nextArrow:<CarouselArrow/>
    };

    if(this.props.images && this.props.images.length > 1) {
      return(
        <Slider {...settings}>
          {images.map(function(i,index) {
            return <div key={ index }><img src={i.image} alt=""/><p>{index+1} / {images.length} <span>{i.caption}</span></p></div>
          })}
          <div className="last-slide">
            <h3>More projects</h3>
            <Link to="/poly"><div className="image" style={{backgroundImage:"url(media/poly/interface/interfaceMobile.jpg)"}}></div>{/*<img src="media/poly/interface/interfaceMobile.jpg" alt=""/>*/}<p><span>Poly</span></p></Link>
            <Link to="/quotidian"><div className="image" style={{backgroundImage:"url(media/quotidian/page.jpg)"}}></div>{/*<img src="media/quotidian/page.jpg" alt=""/>*/}<p><span>Quotidian Ventures</span></p></Link>
            <Link to="/wikitongues"><div className="image" style={{backgroundImage:"url(media/wikitongues/website.png)"}}></div>{/*<img src="media/wikitongues/website.png" alt=""/>*/}<p><span>Wikitongues</span></p></Link>
            <Link to="/amicus"><div className="image" style={{backgroundImage:"url(media/amicus/interface/page.jpg)"}}></div>{/*<img src="media/poly/logo/banner.jpg" alt=""/>*/}<p><span>Amicus</span></p></Link>
            <Link to="/national-sawdust"><div className="image" style={{backgroundImage:"url(media/endDash/banner.png)"}}></div>{/*<img src="media/poly/logo/banner.jpg" alt=""/>*/}<p><span>EndDash</span></p></Link>
          </div>
        </Slider>
      )
    } else {
      return (
        <div className="slick-slider single">
          <div className="slick-list">
            <div className="slick-track">
              <div className="slick-slide slick-active"><img src={this.props.images[0].image} alt=""/><p className=".tk-mr-eaves-xl-sans-narrow"><span>{this.props.images[0].caption}</span></p></div>
            </div>
          </div>
        </div>
      )
    }
  }

  renderTags(props) {
    var tags = this.props.tags
    if(tags) {
      return(
        <ul className="tags">
          {tags.map(function(name,index) {
            return <li key={ index }>{name}</li>
          })}
        </ul>
      )
    }
  }

  render() {
    return (
      <div className="singleHead">
        <nav>
          <Link to="/" className="linkTo l g">&lsaquo;  Portfolio</Link>
          <h2>{this.props.title}</h2>
          {this.renderVisit()}
        </nav>
        <div className="media">
          {this.renderCarousel()}
        </div>
        {this.renderTags()}
      </div>
    )
  }
}

