import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class Amicus extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="Amicus"
            images={
              [{image:"media/amicus/design/page.jpg",caption:"Amicus Post is a tool to streamline direct mail campaigns."},
              {image:"media/amicus/interface/page.jpg",caption:"The tool guides volunteers through the process of selecting friends to send campaign postcards to."},
              {image:"media/amicus/design/presentation.png",caption:"Amicus Post had to be accessible and fun, so an illustrated aesthetic fit really well."},
              {image:"media/amicus/nytm.jpg",caption:"Founder Seth Bannon presents my tool Amicus Post at the New York Tech Meetup"},
              {image:"media/amicus/design/squirrel.jpg",caption:"Amicus had a wondeful workplace culture, which we sought to capture in our outreach."},
            ]}
            visit="https://amicushq.com/"
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