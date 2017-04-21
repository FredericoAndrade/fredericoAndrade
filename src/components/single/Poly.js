import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

export default class Poly extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="Poly"
            visit="https://poly.wikitongues.org/"
            images={[
              {image:"media/poly/interface/page.jpg",placeholder:"placeholder/poly/interface/page.jpg",caption:"Poly is a tool to share and learn every language in the world."},
              {image:"media/poly/interface/mobile.jpg",placeholder:"placeholder/poly/interface/mobile.jpg",caption:"Poly needs to be accessible to people all over the world."},
              // {image:"media/poly/logo/logomark.jpg",placeholder:"placeholder/poly/logo/logomark.jpg",caption:"The Poly Logomark"},
              // {image:"media/poly/logo/mascotFull.jpg",placeholder:"placeholder/poly/logo/mascotFull.jpg",caption:""},
              {image:"media/poly/logo/poster.jpg",placeholder:"placeholder/poly/logo/poster.jpg",caption:"The blue macaw Poly represents hope and determination in the face of adversity"},
              {image:"media/poly/logo/banner.jpg",placeholder:"placeholder/poly/logo/banner.jpg",caption:"Publishing banner"},
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
              <h1>Poly</h1>
              <section className="one-col">
                <p>Poly is <Link to="/wikitongues">Wikitongues</Link>' first foray into building apps. Recognizing that awareness-raising, while an important layer of the organization's mission, does not go far enough to provide access to the language, the organiztion resolved to develop the platform to empower speakers and signers of every language in the world to share document their own languages on an easy and simple platform.</p>
              </section>
              <section className="two-col">
                <p>The application empowers anyone to produce language documentation and lessons, and is being used by Wikitongues to collect introductory phrases in the world's less documented languages.</p>
                <h3>Process</h3>
                <p>The development process for Poly has been long and involved, and as any dynamic technology, will never be complete. I realized from the onset that the only feasible way for Wikitongues to produce technology was if it was done inhouse, removing the financial restrictions. As such, I took it upon myself to learn all of the requisite technologies to develop the application, leveraging my experience with front-end development as an entry point.</p>
                <p>I built our first prototype in Ember.js and Firebase, and had the opportunity to demonstrate it at the New York Tech Meetup. At that moment, the core functionalities were designed, and the behavior of the app had shaped up.</p>
              </section>
              <section className="two-col">
                <figure>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Uy3w-cNABBg?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
                  <figcaption>A video demo of the Poly app</figcaption>
                </figure>
              </section>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

