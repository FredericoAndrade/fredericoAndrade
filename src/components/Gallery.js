import React from 'react';
// import { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

const routes = [
  { id:1, title: "Wikitongues", path: "wikitongues", show: true},
  { id:2, title: "Poly", path: "poly", show: true},
  { id:3, title: "Amicus", path: "amicus", show: true},
  { id:4, title: "EndDash", path: "enddash", show: true},
  { id:5, title: "Sam Guest", path: "sam-guest", show: true},
  { id:6, title: "Airtable", path: "airtable", show: true},
  { id:7, title: "Datamonkey", path: "datamonkey", show: true},
  { id:8, title: "Quotidian Ventures", path: "quotidian-ventures", show: true},
  { id:9, title: "DV01", path: "dv01", show: true},
  { id:10, title: "Matte", path: "matte", show: true},
  { id:11, title: "National Sawdust", path: "national-sawdust", show: true},
  { id:12, title: "Vision Into Art", path: "vision-into-art", show: true}
]

var galleryIndex = routes.map(function(i) {
  if(i.show) {
    return (
      <li key={i.id}>
        <Link to={{ pathname:`${i.path}` }}>{i.title}</Link>
      </li>
    )
  };
});

const GalleryIndex = () => (
  <ul id="galleryIndex">
    {galleryIndex}
  </ul>
)

export default class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="App tk-adobe-garamond-pro">
        <Link className="linkTo l" to="/resume">&lsaquo;  Résumé</Link>
        <GalleryIndex/>
        <section className="toggleType">
          <h3>Displaying</h3>
          <fieldset>
            <input id="client" name="display" type="radio" defaultChecked/><label htmlFor="client">By Client</label>
            <input id="discipline" name="display" type="radio"/><label htmlFor="discipline">By Discipline</label>
          </fieldset>
        </section>
        <footer className="index"><p>I am always looking for new and exciting opportunities to do good work.</p><p>For inquiries, please don't hesitate to contact me at faandrade@gmail.com.</p></footer>
      </div>
    )
  }
}
