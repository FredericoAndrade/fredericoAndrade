import React from 'react';
import CarouselArrow from './CarouselArrow'
import Slider from 'react-slick'
import ProgressiveImage from 'react-progressive-image'
import { Link } from 'react-router-dom'

export default class SingleHead extends React.Component {

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
            return (
              <div key={ index }>
                <ProgressiveImage src={i.image} placeholder={i.placeholder}>
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <p>{index+1} / {images.length} <span>{i.caption}</span></p>
              </div>
            )
          })}
          <div className="last-slide">
            <h3>More projects</h3>
            <Link to="/poly"><div className="image" style={{backgroundImage:"url(media/poly/interface/mobile.jpg)"}}></div><p><span>Poly</span></p></Link>
            <Link to="/wikitongues"><div className="image" style={{backgroundImage:"url(media/wikitongues/website.png)"}}></div><p><span>Wikitongues</span></p></Link>
            <Link to="/amicus"><div className="image" style={{backgroundImage:"url(media/amicus/interface/page.jpg)"}}></div><p><span>Amicus</span></p></Link>
            <Link to="/more"><div className="image" style={{backgroundImage:"url(media/ns/banner.jpg)"}}></div><p><span>More projects</span></p></Link>
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

  render() {
    return (
      <div className="media">
        {this.renderCarousel()}
      </div>
    )
  }
}

