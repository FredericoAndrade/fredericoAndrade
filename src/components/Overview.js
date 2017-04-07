import React from 'react';
// import { Component } from 'react';
// import SingleHead from './SingleHead'
import CarouselArrow from './CarouselArrow'
var Slider = require('react-slick');
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

// const routes = [
//   { id:1, title: "Wikitongues", path: "wikitongues", show: 1},
//   { id:2, title: "Poly", path: "poly", show: 1},
//   { id:3, title: "Amicus", path: "amicus", show: 1},
//   { id:4, title: "EndDash", path: "enddash", show: 1},
//   { id:6, title: "Airtable", path: "airtable", show: 0},
//   { id:7, title: "Datamonkey", path: "datamonkey", show: 0},
//   { id:8, title: "Quotidian Ventures", path: "quotidian-ventures", show: 1},
//   { id:9, title: "dv01", path: "dv01", show: 1},
//   { id:10, title: "Matte", path: "matte", show: 0},
//   { id:11, title: "National Sawdust", path: "national-sawdust", show: 1},
//   { id:12, title: "VisionIntoArt", path: "visionIntoArt", show: 1},
//   { id:5, title: "Sam Guest", path: "sam-guest", show: 1},
//   { id:13, title: "Matchbook", path: "matchbook", show: 1},
//   { id:14, title: "Michelle Bogre", path: "michelle-bogre", show: 0},
// ]

// var galleryIndex = routes.map(function(i) {
//   if(i.show) {
//     return (
//       <li key={i.id}>
//         <Link to={{ pathname:`${i.path}` }}>{i.title}</Link>
//       </li>
//     )
//   }
//   return false;
// });

// const GalleryIndex = () => (
//   <ul id="galleryIndex">
//     {galleryIndex}
//   </ul>
// )

export default class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  renderCarousel(props) {
    // var images = this.props.images
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

    return(
      <Slider {...settings}>
        <div><img src="media/wikitongues/website.png" alt=""/><Link className="overview" to="/wikitongues">Go &rsaquo;</Link><p>1 / 10 <span>Wikitongues</span></p></div>
        <div><img src="media/poly/interface/page.jpg" alt=""/><Link className="overview" to="/poly">Go &rsaquo;</Link><p>2 / 10 <span>Poly</span></p></div>
        <div><img src="media/amicus/interface/page.jpg" alt=""/><Link className="overview" to="/amicus">Go &rsaquo;</Link><p>3 / 10 <span>Amicus</span></p></div>
        <div><img src="media/enddash/page.jpg" alt=""/><Link className="overview" to="/enddash">Go &rsaquo;</Link><p>4 / 10 <span>EndDash</span></p></div>
        <div><img src="media/quotidian/page.jpg" alt=""/><Link className="overview" to="/poly">Go &rsaquo;</Link><p>5 / 10 <span>Quotidian Ventures</span></p></div>
        <div><img src="media/dv01/page.jpg" alt=""/><Link className="overview" to="/dv01">Go &rsaquo;</Link><p>6 / 10 <span>dv01</span></p></div>
        <div><img src="media/ns/banner.jpg" alt=""/><Link className="overview" to="/national-sawdust">Go &rsaquo;</Link><p>7 / 10 <span>National Sawdust</span></p></div>
        <div><img src="media/via/page.jpg" alt=""/><Link className="overview" to="/visionintoart">Go &rsaquo;</Link><p>8 / 10 <span>VisionIntoArt</span></p></div>
        <div><img src="media/samGuest/page.jpg" alt=""/><Link className="overview" to="/sam-guest">Go &rsaquo;</Link><p>9 / 10 <span>Sam Guest</span></p></div>
        <div><img src="media/matchbook/banner.png" alt=""/><Link className="overview" to="/matchbook">Go &rsaquo;</Link><p>10 / 10 <span>Matchbook</span></p></div>
      </Slider>
    )
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro">
        <div className="wrapper">
        <Link className="linkTo l" to="/resume">&lsaquo;  Résumé</Link>

        <div className="singleHead">
          <nav>
            <h2>Freddie loves work 💖</h2>
          </nav>
          <div className="media">
            {this.renderCarousel()}
          </div>
        </div>

        <section className="toggleType">
          <h3>Displaying</h3>
          <fieldset>
            <Link to="/">By Client</Link>
            <input id="client" name="display" type="radio" defaultChecked/><label htmlFor="client">By Image</label>
          </fieldset>
        </section>
        {/*<footer className="index"><p>I am always looking for new and exciting opportunities to do good work.</p><p>For inquiries, please don't hesitate to contact me at faandrade@gmail.com.</p></footer>*/}
        </div>
      </div>
    )
  }
}
