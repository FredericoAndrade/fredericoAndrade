import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

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
            visit="https://www.poly.wikitongues.org/"
            images={[
              {image:"media/poly/interface/page.jpg",caption:"Poly is a tool to share and learn every language in the world."},
              {image:"media/poly/interface/mobile.jpg",caption:"Poly needs to be accessible to people all over the world."},
              // {image:"media/poly/logo/logomark.jpg",caption:"The Poly Logomark"},
              // {image:"media/poly/logo/mascotFull.jpg",caption:""},
              {image:"media/poly/logo/poster.jpg",caption:"The blue macaw Poly represents hope and determination in the face of adversity"},
              {image:"media/poly/logo/banner.jpg",caption:"Publishing banner"},
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
              <section className="one-col">
                <h3>What is <br/>Poly</h3>
                <p>Poly is Wikitongues' first foray into building apps. Recognizing that awareness-raising, while an important layer of the organization's mission, does not go far enough to provide access to the language.</p>
                <p>The application empowers anyone to produce language documentation and lessons, and is being used by Wikitongues to collect introductory phrases in the world's less documented languages.</p>
              </section>
              <section className="two-col" style={{height:"610px"}}></section>
              <section className="one-col">
                <h3>Concept</h3>
                <p>They needed a website to accompany the grand opening of the venue</p>
                <p>Iterating closely with Sam, a non-aesthetic surfaced, that is both alien to the non-technical among the millenial generation, and deeply structural, while still having room for editorial character.</p>
              </section>
              <section className="one-col">
                <h3>Process</h3>
                <p>When film director Sam Guest approached me to build him a website, he was after something unique. After all, film director websites have one purpose and one purpose alone- to showcase their work.</p>
              </section>
              <section className="one-col">
                <h3>Design</h3>
                <p>When film director Sam Guest approached me to build him a website, he was after something unique. After all, film director websites have one purpose and one purpose alone- to showcase their work.</p>
              </section>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

