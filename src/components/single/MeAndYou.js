import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class MeAndYou extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="MeAndYou"
            images={[
              {image:"media/meAndYou/page.jpg",caption:"The brand has a very loose, unconstrained feel, and the site had to convey that."},
              {image:"media/meAndYou/detail.png",caption:"Large images prominently display the company's strengths in art direction and design."},
              {image:"media/meAndYou/product.png",caption:"In selling products, it is important to offer the user varied coverage."},
            ]}
            visit="https://www.itsmeandyou.com/"
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
            <h1>Me And You</h1>
              <section className="one-col">
                <p>Me And You are an Instagram icon, lifestyle brand and feminist activism group based in New York. They do brand campaigns, styling, and desing and sell garments and jewelry through the site I designed and implemented with Daniel Udell. </p>
              </section>
              <section className="two-col">
              </section>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

