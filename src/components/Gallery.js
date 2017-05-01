import React from 'react';
// import { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

const routes = [
  { id:2, title: "Poly", path: "poly", show: 1},
  { id:1, title: "Wikitongues", path: "wikitongues", show: 1},
  { id:3, title: "Amicus", path: "amicus", show: 1},
  { id:4, title: "EndDash", path: "enddash", show: 1},
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
    {galleryIndex}

    <li>
      <Link to="/more">More projects</Link>
    </li>
    <li>
      <Link to="/resume">Résumé</Link>
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
        <GalleryIndex/>
        <footer className="index"><p>I am always looking for new and exciting opportunities to do good work.</p><p>For inquiries, please don't hesitate to contact me at faandrade@gmail.com.</p></footer>
      </div>
    )
  }
}
