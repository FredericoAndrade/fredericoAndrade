import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class Enddash extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="EndDash"
            images={
              [{image:"media/endDash/banner.png",caption:"Placeholder"},
            ]}
            visit="http://www.enddash.com/"
            tags={
              ["ui",
              "ux",
              "development",
              "branding"]}
            />

          <div className="content">
            <div className="block three-col">
              <section className="one-col">
                <h3>What is<br/> EndDash</h3>
                <p>EndDash is a two-way-binding javascript templating framework built on top of semantic HTML. It was developed by the engineers at Amicus when I was at the company. Once it reached a mature enough stage to be opened to the general public, it needed a documentation site. To that end, I designed and built the docs.</p>
              </section>
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

            <img src="media/endDash/detail.png" width="370" alt=""/>
            <img src="media/endDash/nestedNav.png" width="370" alt=""/>
            <img src="media/endDash/screen1.png" width="670" alt=""/>
            <img src="media/endDash/screen2.png" width="670" alt=""/>
            <img src="media/endDash/screen3.png" width="670" alt=""/>
            <video src="media/endDash/easterEgg.mov" width="670" autoPlay loop></video>
            <video src="media/endDash/interaction.mov" width="670" autoPlay loop></video>
            <video src="media/endDash/logo.mov" autoPlay loop></video>

          </div>
        </div>
      </div>
    )
  }
}