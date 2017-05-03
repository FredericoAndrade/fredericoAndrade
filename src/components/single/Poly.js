import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
import ProgressiveImage from 'react-progressive-image'
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'
// <p>I built our first prototype in Ember.js and Firebase, and had the opportunity to demonstrate it at the New York Tech Meetup. At that moment, the core functionalities were designed, and the behavior of the app had shaped up.</p>

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
              {image:"media/poly/interface/process3.jpg",placeholder:"placeholder/poly/interface/process3.jpg",caption:"For all of the simplicity from the user's side, Poly has a lot of complexity."},
              {image:"media/poly/logo/poster.jpg",placeholder:"placeholder/poly/logo/poster.jpg",caption:"The blue macaw Poly represents hope and determination in the face of adversity"},
              // {image:"media/poly/logo/logomark.jpg",placeholder:"placeholder/poly/logo/logomark.jpg",caption:"The Poly Logomark"},
              // {image:"media/poly/logo/banner.jpg",placeholder:"placeholder/poly/logo/banner.jpg",caption:"Publishing banner"},
              ]}
            />

          <div className="content">
            <div className="block three-col">
              <h1>Poly</h1>
              <section className="one-col">
                <p>Poly is open source, modern software to share and learn every language in the world. Recognizing that awareness-raising, while an important layer of the organization's mission, does not go far enough to provide access to the language, <Link to="/wikitongues">Wikitongues</Link> resolved to develop the platform to empower speakers and signers of every language in the world to share document their own languages on an easy and simple platform. The development process for Poly has been long and involved, and as any dynamic technology, will never be complete. I realized from the onset that the only feasible way for Wikitongues to produce technology was if it was done inhouse, removing the financial restrictions. As such, I took it upon myself to learn all of the requisite technologies to develop the application, leveraging my experience with front-end development as an entry point.</p>
              </section>
              <section className="two-col">
                <p>The application empowers anyone to produce language documentation and lessons, and is being used by Wikitongues to collect introductory phrases in the world's less documented languages.</p>
                <p>Designed to be used by anyone regardless of familiarity with the platform, close attention was paid to interface affordances and semotic transfer.</p>
                <figure>
                  <iframe height="354" src="https://www.youtube.com/embed/-fVDgKy7ieA?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
                  <figcaption>A video demo of the Poly app</figcaption>
                </figure>
              </section>
              <span><h3>Product design</h3></span>
              <section className="two-col">
                <figure>
                  <ProgressiveImage src="media/poly/interface/process.png" placeholder="placeholder/poly/interface/process.png">
                    {(src) => <img src={src} alt=""/>}
                  </ProgressiveImage>
                  <figcaption>First Poly interface sketches</figcaption>
                </figure>
              </section>
              <section className="one-col">
                <p>The underlying metaphor behind the Poly interface is the now widely popular digital texting symbol. Relying on the semiotic value of the digital communication system forged over the last few decades, the Poly phrase book empowers users to create language key-value pairs translating one language to the next. We have tested our assumption that this is an immediately inferrable affordance by getting Poly into the hands of a wide audeince of users, from young children to the elderly, and from communities submerged in connectivity to those for whom access to the internet is closely monitored.</p>
              </section>
              <span><h3>Logo and brand</h3></span>
              <section className="three-col">
                <figure>
                  <ProgressiveImage src="media/poly/poly.jpg" placeholder="placeholder/poly/poly.jpg">
                    {(src) => <img src={src} alt=""/>}
                  </ProgressiveImage>

                  <ProgressiveImage src="media/poly/pencilTests.png" placeholder="placeholder/poly/pencilTests.png">
                    {(src) => <img src={src} alt=""/>}
                  </ProgressiveImage>
                  <figcaption>Poly character pencil tests</figcaption>
                </figure>
              </section>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

