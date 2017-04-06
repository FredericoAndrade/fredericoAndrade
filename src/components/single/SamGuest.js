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
            visit="http://sam-guest.com/"
            images={
              [{image:"media/samGuest/page.jpg",caption:"Film director Sam Guest needed a website that followed in line with his aesthetic sensibilities - no frills."},
              {image:"media/samGuest/single.jpg",caption:"With a bare minimum of context, each project relies on press coverage to tell the story."},
              {image:"media/samGuest/about.png",caption:"The about page leaves the viewer with more questions than it answers."},
            ]}
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
              <h1>Sam Guest</h1>
              <section className="one-col">
                <p>When film director Sam Guest approached me to build him a website, he was after something unique. After all, film director websites have one purpose and one purpose alone - to showcase their work.</p>
              </section>
              <section className="two-col">
                <p>Iterating closely with Guest, a non-aesthetic surfaced that is both alien to the non-technical among us, and deeply structural to the internet, while still having room for editorial character.</p>
                <p>The website features a range of details that push the it beyond the familiar. Careful consideration was given to preserve the unstyled, purely functional aesthetic. Slightly altered colors and typography, unusual spacing, tracking and line heights, and careful positioning of elements in the window makes for an interesting experience. A resume-style list of work showcases everything that Guest wishes to show. Careful consideration was given to making sure the website is fast and accessible across platforms.</p>
                <p>The website needed to be maintainable by the director himself, with a minimum learning curve. We opted against a CMS, preferring instead to interface with the content directly in markup.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

