import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class SamGuest extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="Sam Guest"
            images={
              [{image:"media/samGuest/page.jpg",caption:"Film director Sam Guest requested a page unlike anything he's seen before. Turns out he'd been craving some HTML."},
              {image:"media/samGuest/single.jpg",caption:"Stripped of ornament, the single project page displays the subject, with a bare minimum of context."},
              {image:"media/samGuest/about.png",caption:"In staying with the aesthetic, the about page leaves the viewer with more questions than it answers."},
            ]}
            visit="http://sam-guest.com/"
            tags={
              ["ui",
              "ux",
              "development",
              "logo",
              "print",
              "branding"]}
            />

          <div className="content">
            <div className="block three-col">
              <section className="one-col">
                <h3>Concept</h3>
                <p>When film director Sam Guest approached me to build him a website, he was after something unique. After all, film director websites have one purpose and one purpose alone- to showcase their work.</p>
              </section>
              <section className="one-col">
                <h3>Process</h3>
                <p>Iterating closely with Sam, a non-aesthetic surfaced, that is both alien to the non-technical among the millenial generation, and deeply structural to the internet, while still having room for editorial character.</p>
              </section>
              <section className="one-col">
                <h3>Design</h3>
                <p>The website features a range of details that venture from the default. Careful consideration was given to preserve the unstyled, purely functional aesthetic. Slightly altered colors, unusual spacing, tracking and line heights, and careful positioning of elements in the window makes for an interesting experience across all devices.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

