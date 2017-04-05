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
              {image:"media/wikitongues/pamphlet2.jpg",caption:"Whenever Wikitongues has a booth at an event, we bring these promotional pamplhets"},
              // {image:"media/wikitongues/pamphlet.jpg",caption:"Whenever Wikitongues has a booth at an event, we bring these promotional pamplhets"},
              {image:"media/wikitongues/businessCards.jpg",caption:"Whenever Wikitongues has a booth at an event, we bring these promotional pamplhets"},
              {image:"media/wikitongues/logo/logoVariations.png",caption:"Whenever Wikitongues has a booth at an event, we bring these promotional pamplhets"},
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
                <h1>Wikitongues</h1>
                <p>Wikitongues is a movement for language rights. Together with speakers and signers from every language in the world, Wikitongues is raising awareness about linguistic diversity and rallying to defend it</p>
              </section>
              {/*<figure className="two-col">
                              <img src="media/wikitongues/logo/lockups/horizontal.png" alt=""/>
                              <figcaption>The Wikitongues logo represents a human waving their arms</figcaption>
                            </figure>*/}
              <section className="two-col" style={{height:"400px"}}></section>
              <section className="one-col">
                <h3>Design</h3>
                <p>I co-founded this non-profit with my colleague Daniel Bogre Udell. I've operated as chief platform officer and am a board member. I crafted the organization’s brand to meet carefully crafted strategic goals, and desinged and produced all of the collateral (business cards, pamplhets, presentation materials, ads).</p>
                <br/>
                <p>I designed and implemented an open source tool <Link to="/poly">Poly</Link> to advance the organziation’s mission, presented it by invitation at the New York Tech Meetup’s respected <a href="https://vimeo.com/127205159#t=3133s">Hack of the Month</a> segment and <a href="http://kck.st/poly">raised a record breaking kickstarter campaign</a> to build it and the distributed team of open source contributors that helps me maintain it. (They even made us a fancy custom URL '<a href="http://kck.st/poly">kck.st/poly</a>')</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
