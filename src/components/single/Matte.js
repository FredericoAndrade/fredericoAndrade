import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class Matte extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="Matte"
            images={
              [{image:"media/poly/logo/banner.jpg",placeholder:"placeholder/poly/logo/banner.jpg",caption:"Placeholder"},
            ]}
            visit="https://matteprojects.com/"
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
          </div>
        </div>
      </div>


    )
  }
}

