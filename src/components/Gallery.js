import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
  { id: 0, title: "Wikitongues", path: "wikitongues", banner: "../../bannerWikitongues.png"},
  { id: 1, title: "Poly", path: "poly", banner: "../../bannerPoly.png"},
  { id: 2, title: "Amicus", path: "amicus", banner: "../../bannerWikitongues.png"},
  { id: 3, title: "Airtable", path: "airtable", banner: "../../bannerWikitongues.png"},
  { id: 4, title: "Datamonkey", path: "datamonkey", banner: "../../bannerWikitongues.png"},
  { id: 5, title: "Quotidian Ventures", path: "quotidian-ventures", banner: "../../bannerWikitongues.png"},
  { id: 6, title: "DV01", path: "dv01", banner: "../../bannerWikitongues.png"},
  { id: 7, title: "Matte", path: "matte", banner: "../../bannerWikitongues.png"},
  { id: 8, title: "National Sawdust", path: "national-sawdust", banner: "../../bannerWikitongues.png"},
  { id: 9, title: "Vision Into Art", path: "vision-into-art", banner: "../../bannerWikitongues.png"}
]

const GalleryIndex = () => (
  <ul id="galleryIndex" className="tk-adobe-garamond-pro">
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
  render() {
    return (
      <div className="App">
        <Link to="/">Back</Link>
        <GalleryIndex/>
      </div>
    )
  }
}
