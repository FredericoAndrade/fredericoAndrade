import React from 'react';
import GalleryIndex from './GalleryIndex'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// const PORTFOLIO = [
//   { id: 0, title: "Wikitongues", url: "wikitongues", banner: "../../bannerWikitongues.png"},
//   { id: 1, title: "Poly", url: "poly", banner: "../../bannerPoly.png"},
//   { id: 2, title: "Amicus", url: "amicus", banner: "../../bannerWikitongues.png"},
//   { id: 10, title: "Endash", url: "endash", banner: "../../bannerWikitongues.png"},
//   { id: 3, title: "Airtable", url: "airtable", banner: "../../bannerWikitongues.png"},
//   { id: 4, title: "Datamonkey", url: "datamonkey", banner: "../../bannerWikitongues.png"},
//   { id: 5, title: "Quotidian Ventures", url: "quotidian-ventures", banner: "../../bannerWikitongues.png"},
//   { id: 6, title: "DV01", url: "dv01", banner: "../../bannerWikitongues.png"},
//   { id: 7, title: "Matte", url: "matte", banner: "../../bannerWikitongues.png"},
//   { id: 8, title: "National Sawdust", url: "national-sawdust", banner: "../../bannerWikitongues.png"},
//   { id: 9, title: "Vision Into Art", url: "vision-into-art", banner: "../../bannerWikitongues.png"}
// ]

export default class GalleryPage extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Link to="/">Resume</Link>
        <h3>{i.title}</h3>
        <GalleryIndex/>
      </div>
      </Router>
    )
  }
}