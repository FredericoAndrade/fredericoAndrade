import React from 'react';
// import { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

const routes = [
  { id: 0, title: "Wikitongues", path: "wikitongues"},
  { id: 1, title: "Poly", path: "poly"},
  { id: 2, title: "Amicus", path: "amicus"},
  { id: 10, title: "EndDash", path: "enddash"},
  { id: 11, title: "Sam Guest", path: "sam-guest"},
  { id: 3, title: "Airtable", path: "airtable"},
  { id: 4, title: "Datamonkey", path: "datamonkey"},
  { id: 5, title: "Quotidian Ventures", path: "quotidian-ventures"},
  { id: 6, title: "DV01", path: "dv01"},
  { id: 7, title: "Matte", path: "matte"},
  { id: 8, title: "National Sawdust", path: "national-sawdust"},
  { id: 9, title: "Vision Into Art", path: "vision-into-art"}
]

const GalleryIndex = () => (
  <ul id="galleryIndex">
    {routes.map(i =>(
      <li key={i.id}>
        <Link
          to={{
            pathname:`${i.path}`
          }}
        >
          {i.title}
        </Link>
      </li>
      ))}
  </ul>
)

export default class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="App tk-adobe-garamond-pro">
        <Link className="linkTo l" to="/">Résumé</Link>
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
