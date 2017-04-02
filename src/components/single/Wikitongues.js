import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'


export default class Wikitongues extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="Wikitongues"
            visit="https://wikitongues.org/"
            images={[
              {image:"media/wikitongues/logo/lockups/caligraphic.jpg",caption:"The caligraphic Wikitongues glyph depicts a person with outstretched arms."},
              {image:"media/wikitongues/website.png",caption:"The Wikitongues website is the organization's point of contact with the world."},
              {image:"media/wikitongues/banner.jpg",caption:"The Wikitongues banner is carefully designed to provide a unique human insight into the project"},
              {image:"media/wikitongues/pamphlet.jpg",caption:"Whenever Wikitongues has a booth at an event, we bring these promotional pamplhets"},
              {image:"media/wikitongues/businessCards.jpg",caption:"Whenever Wikitongues has a booth at an event, we bring these promotional pamplhets"},
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
                <h3>What is <br/> Wikitongues</h3>
                <p>Wikitongues is a movement for language rights. Together with speakers and signers from every language in the world, Wikitongues is raising awareness about linguistic diversity and rallying to defend it</p>
              </section>
              <figure className="two-col">
                <img src="media/wikitongues/logo/lockups/calligraphic.png" alt=""/>
                <figcaption>The Wikitongues logo represents a human waving their arms</figcaption>
              </figure>
              <section className="one-col">
                <h3>What I did</h3>
                <p>I co-founded this non-profit with my colleague Daniel Bogre Udell. I've operated as chief platform officer and am a board member. I crafted the organization’s <em>brand</em> to meet carefully crafted strategic goals, and <em>desinged and produced</em> all of the collateral (business cards, pamplhets, presentation materials, ads).</p>
                <br/>
                <p>I <em>designed</em> and <em>implemented</em> an open source tool <Link to="/poly">Poly</Link> to advance the organziation’s mission, presented it by invitation at the New York Tech Meetup’s respected <a href="https://vimeo.com/127205159#t=3133s">Hack of the Month</a> segment and <a href="http://kck.st/poly">raised a record breaking kickstarter campaign</a> to build it and the distributed team of open source contributors that helps me maintain it. (They even made us a fancy custom URL '<a href="http://kck.st/poly">kck.st/poly</a>')</p>
              </section>
            </div>

            <h2>Process</h2>

            <div className="block">
              <section>
                <h3 id="brand">Brand</h3>
                <ul>
                  <li>Colors</li>
                  <li>Imagery</li>
                  <li>Grid</li>
                  <li>Graphics</li>
                </ul>
              </section>
              <section>
                <h3 id="collateral">Collateral</h3>
                <ul>
                  <li>Business cards</li>
                  <li>Pamphlets</li>
                  <li>Table banner</li>
                  <li>Stickers</li>
                  <li>Mugs</li>
                  <li>Catalogs</li>
                </ul>
              </section>
              <section>
                <h3 id="website">Website</h3>
                <ul>
                  <li>Version 1</li>
                  <li>Version 2</li>
                  <li>Version 3</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/*
<div className="block">
  <h1 id="logo">Logo</h1>
  <p>The Wikitongues logo went through a long iteration process to arrive at the current glyph.</p>
</div>

<section className="media">

  <h3>Glyph</h3>

  <section className="series three">
    <img src="media/wikitongues/logo/lockups/mark.png" alt=""/>
    <img src="media/wikitongues/logo/lockups/calligraphic.png" alt=""/>
    <video src="media/wikitongues/logo/lockups/sting.mov" autoPlay loop poster="media/wikitongues/logo/calligraphic.png"></video>
  </section>

  <h3>Lockups</h3>

  <section className="series two">
    <img src="media/wikitongues/logo/lockups/vertical.png" alt=""/>
    <img src="media/wikitongues/logo/lockups/horizontal.png" alt=""/>
  </section>

  <section className="series one"><img src="media/wikitongues/logo/corporateMark.png" alt=""/></section>

</section>

<h3>Early variations</h3>

<section className="series two">
  <img src="media/wikitongues/logo/variations/1.png" alt=""/>
  <img src="media/wikitongues/logo/variations/2.png" alt=""/>
</section>

<section className="series one"><img src="media/wikitongues/logo/variations/4.png" alt=""/></section>

<h3>Human Glyph</h3>

<section className="series three">
  <img src="media/wikitongues/logo/variations/10.jpg" alt=""/>
  <img src="media/wikitongues/logo/variations/12.png" alt=""/>
  <img src="media/wikitongues/logo/variations/11.png" alt=""/>
</section>
  */