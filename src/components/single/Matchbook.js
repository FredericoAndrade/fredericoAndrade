import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class Matchbook extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="Matchbook"
            visit="https://itunes.apple.com/us/app/matchbook-save-and-remember-great-restaurants-and-bars/id427740544?mt=8"
            images={[
              {image:"media/matchbook/banner.png",caption:"Matchbook needed calligraphic banners for the different pages in their venue recommendation app."},
              {image:"media/matchbook/page.jpeg",caption:"An embellished calligraphic aesthetic."},
            ]}
            tags={[
              "interface design",
              "html5",
              "css3"
              ]}
            />

          <div className="content">
            <div className="block three-col">
              <h1>Matchbook</h1>
              <section className="one-col">
                <p>Matchbook is an iPhone app designed to share and recommend your favorite restaurants to friends and family. Use it to keep track of places you'd like to go (never forget again!) or discover new places in your area.</p>
              </section>
              <section className="two-col">
                <p></p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

