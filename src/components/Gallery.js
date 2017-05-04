import React from 'react';
import { Link } from 'react-router-dom'

const routes = [
  { id:2, title: "Poly", path: "poly", show: 1},
  { id:1, title: "Wikitongues", path: "wikitongues", show: 1},
  { id:3, title: "Amicus", path: "amicus", show: 1},
  { id:4, title: "EndDash", path: "enddash", show: 0},
  { id:15, title: "Me And You", path: "me-and-you", show:0},
  { id:9, title: "dv01", path: "dv01", show: 0},
  { id:8, title: "Quotidian Ventures", path: "quotidian-ventures", show: 0},
  { id:5, title: "Sam Guest", path: "sam-guest", show: 0},
  { id:10, title: "Matte", path: "matte", show: 0},
  { id:11, title: "National Sawdust", path: "national-sawdust", show: 0},
  { id:12, title: "VisionIntoArt", path: "visionIntoArt", show: 0},
  { id:13, title: "Matchbook", path: "matchbook", show: 0},
  { id:14, title: "Michelle Bogre", path: "michelle-bogre", show: 0},
  { id:6, title: "Airtable", path: "airtable", show: 0},
  { id:7, title: "Datamonkey", path: "datamonkey", show: 0},

]

var galleryIndex = routes.map(function(i) {
  if(i.show) {
    return (
      <li key={i.id}>
        <Link to={{ pathname:`${i.path}` }}>{i.title}</Link>
      </li>
    )
  }
  return false;
});

const GalleryIndex = () => (
  <ul id="galleryIndex">
    <h3 className="breadcrumb">Check out some of his work</h3>
    {galleryIndex}
    {/*<li className="extras first">
          <Link to="/more">More projects</Link>
        </li>*/}
    <li className="extras first">
      <Link to="/resume">Résumé</Link>
    </li>
    <li className="extras">
      <a href="./portfolio.pdf">More work</a>
    </li>
  </ul>
)

export default class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="App tk-adobe-garamond-pro">
        <h1 className="statement tk-adobe-garamond-pro">Freddie is a product strategist & visual designer.</h1>
        <GalleryIndex/>
        <footer className="index">
          <p>All work is Freddie's unless otherwise explicitly stated</p>
          <p>Freddie is open to new and exciting opportunities to do good work.</p>
          <p>For inquiries, please don't hesitate to reach out at faandrade@gmail.com.</p>
          <p>This website is made with <a href="https://facebook.github.io/react/">React.js</a>, is hosted on <a href="https://www.heroku.com">Heroku</a> and uses some <a href="https://github.com/akiran/react-slick">wonderful</a> <a href="https://github.com/FormidableLabs/react-progressive-image">components</a>! The code is all on <a href="https://github.com/fredericoandrade/fredericoandrade">Github</a> too.</p>
        </footer>
      </div>
    )
  }
}
