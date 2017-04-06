import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

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
            visit="https://www.amicushq.com/"
            images={
              [{image:"media/amicus/design/page.jpg",caption:"Amicus Post is a tool to streamline direct mail campaigns."},
              {image:"media/amicus/interface/page.jpg",caption:"The tool guides volunteers through the process of selecting friends to send campaign postcards to."},
              {image:"media/amicus/design/presentation.png",caption:"Amicus Post had to be accessible and fun, so an illustrated aesthetic fit really well."},
              {image:"media/amicus/nytm.jpg",caption:"Founder Seth Bannon presents my tool Amicus Post at the New York Tech Meetup"},
              {image:"media/amicus/design/squirrel.jpg",caption:"Amicus had a wonderful workplace culture, which we sought to capture in our outreach."},
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
              <h1>Amicus</h1>
              <section className="one-col">
                <p>Amicus is a company that helps causes organize their volunteers by providing tools for phone banking and direct mail campaigns. I joined the company as a designer in late 2013, and worked to develop their brand as well as to design new app concepts. My work at Amicus consisted of two main disciplines; interaction design and branding.</p>
              </section>
              <section className="two-col">
                <h3>Interaction</h3>
                <p>I joined Amicus right as they looked to develop a new direct mail tool that they could sell to their advocacy clients such as the Democratic Congressional Campaign Comittee (DCCC), as well as local political campaigns.</p>
                <p>The tool, called Amicus Post, was very successful, and went on to replace the company's main product.</p>
                {/*<section className="one-col"></section>
                <section className="one-col"></section>*/}
                <p>Both Amicus Post and the call tool were built on top of an in-house framework called <Link to="/enddash">EndDash</Link>, itself built on top of backbone.js. I was charged with building a documentation site for it around the time it was publically announced.</p>
                <h3>Branding</h3>
                <p>The Amicus brand was mature by the time I joined the company, but they still needed a few pieces of collateral produced, such as business cards and stickers.</p>
                <p>Then with the advent of Amicus Post, the opportunity arose to distinguish it from the call tool through visual identity. The tool was intended to be very easy to use, and targeted a broad demographic, with users ranging form teenagers to the elderly. Therefore the image of the product needed to be soft and playful. I took queues from Roald Dahl's illustrations to produce a youthful, though sober, approach to this community-oriented product.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}