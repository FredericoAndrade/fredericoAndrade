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
              {image:"media/wikitongues/website.png",caption:"The Wikitongues website is the organization's point of contact with the world."},
              {image:"media/wikitongues/banner.jpg",caption:"The Wikitongues banner is carefully designed to provide a unique human insight into the project"},
              {image:"media/wikitongues/pamphlet.jpg",caption:"Whenever Wikitongues has a booth at an event, we bring these promotional pamphlets"},
              {image:"media/wikitongues/businessCards.jpg",caption:"The back of each Wikitongues business card has the phrase 'Every language in the world' in the language of choice of the owner."},
              {image:"media/wikitongues/calligraphic.jpg",caption:"The calligraphic treatment of the Wikitongues logo was made to be animated."},
              {image:"media/wikitongues/logoVariations.png",caption:"The Wikitongues logo depicting a person with outstretched arms went through dozens of variations before arriving at its current form."},
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
              <h1>Wikitongues</h1>
              <section className="one-col">
                <p>Wikitongues is a movement for language rights. Together with speakers and signers from every language in the world, Wikitongues is raising awareness about linguistic diversity and rallying to defend it</p>
                <p>I co-founded this non-profit organization with Daniel Bogre Udell in June of 2014, and have worked increasingly more since. I've operated as chief platform officer and am a voting member of the board of directors.</p>
                <p>As platform officer, I crafted the organization’s brand to meet carefully crafted strategic goals, and designed and produced all of the collateral (<a href="https://www.wikitongues.org">website</a>, business cards, pamplhets, presentation materials and ads, as well as t-shirts, mugs, stickers etc).</p>
              </section>
              <section className="two-col">
                <p>I designed and implemented an open source tool <Link to="/poly">Poly</Link> to advance the organziation’s mission, presented it by invitation at the New York Tech Meetup’s respected <a href="https://vimeo.com/127205159#t=3133s">Hack of the Month</a> segment and <a href="http://kck.st/poly">raised a record breaking kickstarter campaign</a> to build it and the distributed team of open source contributors that helps me maintain it. (They even made us a fancy custom URL '<a href="http://kck.st/poly">kck.st/poly</a>')</p>
                <figure>
                  <img src="media/wikitongues/nytm.png" alt=""/>
                  <figcaption>I had the opportunity to present an early version of Poly at the New York Tech Meetup</figcaption>
                </figure>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
