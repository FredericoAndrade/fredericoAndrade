import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class NationalSawdust extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="National Sawdust"
            images={
              [{image:"media/ns/banner.jpg",caption:"National Sawdust is a performance arts institution in Brooklyn, NY."},
              {image:"media/ns/page.jpg",caption:"Artist profile page"},
            ]}
            visit="https://nationalsawdust.org/"
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
                <h3>What is <br/>National Sawdust</h3>
                <p>National Sawdust is an acclaimed performance arts institution in Williamsburg, Brooklyn.</p>
                <p>I had the opportunity to design and build their official website in time with their grand opening.</p>
              </section>
              <section className="two-col" style={{height:"540px"}}></section>
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

