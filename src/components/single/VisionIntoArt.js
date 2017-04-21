import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class VisionIntoArt extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="VisionIntoArt"
            images={[
              {image:"media/via/page.jpg",placeholder:"placeholder/via/page.jpg",caption:"With a focus on e-commerce, the VisionIntoArt website lists the production company's projects"},
              {image:"media/via/single.png",placeholder:"placeholder/via/single.png",caption:"Projects are extremely rich with content, and has quite the story to tell."},
            ]}
            visit="http://visionintoart.com/"
            tags={[
              "html5",
              "css3",
              "stylus",
              "javascript"
              ]}
            />

          <div className="content">
            <div className="block three-col">
              <h1>VisionIntoArt</h1>
              <section className="one-col">
                <p>VisionIntoArt is a Brooklyn based music production company specializing in multidisciplinary new music.</p>
                <p>Daniel Udell and I built the site on Wordpress following designs produced by Mogollon.</p>
              </section>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

