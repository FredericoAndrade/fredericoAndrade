import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class GalleryIndex extends React.Component {
  render() {
    return (
      <div className="App">
      <Link to="/">Resume</Link>
        <ul id="galleryIndex" className="tk-adobe-garamond-pro">
          <li>Wikitongues</li>
          <li>Poly</li>
          <li>Amicus</li>
          <li>Airtable</li>
          <li>Datamonkey</li>
          <li>Quotidian Ventures</li>
          <li>DV01</li>
          <li>Matte</li>
          <li>National Sawdust</li>
          <li>Vision Into Art</li>
        </ul>
      </div>
    )
  }
}