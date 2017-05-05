import React from 'react';
import Head from '../Head'
import Carousel from '../Carousel'
import ProgressiveImage from 'react-progressive-image'


export default class Wikitongues extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">
          <div className="singleHead">
            <Head
              title="Wikitongues"
              visit="https://wikitongues.org/"
            />
            <Carousel
              images={[
                {image:"media/wikitongues/website.png",placeholder:"placeholder/wikitongues/website.png",caption:"The Wikitongues website is the organization's point of contact with the world."},
                {image:"media/wikitongues/banner.jpg",placeholder:"placeholder/wikitongues/banner.jpg",caption:"The Wikitongues banner is carefully designed to provide a unique human insight into the project"},
                {image:"media/wikitongues/pamphlet.jpg",placeholder:"placeholder/wikitongues/pamphlet.jpg",caption:"Whenever Wikitongues has a booth at an event, we bring these promotional pamphlets"},
                {image:"media/wikitongues/businessCards.jpg",placeholder:"placeholder/wikitongues/businessCards.jpg",caption:"The back of each Wikitongues business card has the phrase 'Every language in the world' in the language of choice of the owner."},
                {image:"media/wikitongues/calligraphic.jpg",placeholder:"placeholder/wikitongues/calligraphic.jpg",caption:"The calligraphic treatment of the Wikitongues logo was made to be animated."},
                // {image:"media/wikitongues/logoVariations.png",placeholder:"placeholder/wikitongues/logoVariations.png",caption:"The Wikitongues logo depicting a person with outstretched arms went through dozens of variations before arriving at its current form."},
                ]}
              />
            </div>

          <div className="content">
            <div className="block three-col">
              <h1>Wikitongues</h1>
              <section className="two-col">
                <p>Wikitongues is a movement for language rights. Together with speakers and signers from every language in the world, Wikitongues is raising awareness about linguistic diversity and rallying to defend it</p>
                <p>I co-founded this non-profit organization with Daniel Bogre Udell in June of 2014, and have worked increasingly more since. I've operated as chief platform officer and am a voting member of the board of directors.</p>
                <p>As platform officer, I crafted the organization’s brand to meet carefully crafted strategic goals, and designed and produced all of the collateral (<a href="https://www.wikitongues.org">website</a>, business cards, pamplhets, presentation materials and ads, as well as t-shirts, mugs, stickers etc).</p>
                <p>To date, we have collected and published over 400 videos in almost as many unique languages. Our content has received over three and a half million views, and is growing by more than one hundred thousand views a month.</p>
              </section>
              <span><h3>Content</h3></span>
              <section className="two-col">
                <p>The world is huge, and there are tonnes of people on it. The organization's primary activity involves collecting and publishing video oral histories of speakers and signers from language communities all over the world.</p>
              </section>
              <figure>
                <iframe height="520" src="https://www.youtube.com/embed/-oarxcgzsXY?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
                <figcaption>A typical Wikitongues video.</figcaption>
              </figure>
              <section className="two-col">
                <p>In the video above, recorded by volunteer Sarah Doyle, Lopez tells us a story in his mother language Nafasana, native to the South Pacific Ocean nation of Vanuatu. Until the time of publishing, there were no other materials about the language community available anywhere on the internet. For all intents and purposes, Wikitongues was the first organization to attest the existence of this language community.</p>
              </section>
              <span><h3>Logo and brand</h3></span>
              <figure>
                <ProgressiveImage src="media/wikitongues/logo.gif" placeholder="placeholder/wikitongues/logo.gif">
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <figcaption>The Wikitongues logo</figcaption>
              </figure>
              <section className="two-col">
                <p>From the onset, we realized that the organization had to be perceived as legitimate and established. To that end, all of our brand elements are designed to reflect the global scope of the mission and convey the sense that it is achievable with the right effort.</p>
                <p>The logo itself resulted from an exploration of the core values of the organization; focusing on the concept of communication, a graphic symbol that could be easily reproduced required a strong silhouette.</p>
              </section>
              <figure>
                <ProgressiveImage src="media/wikitongues/logoVariations.png" placeholder="placeholder/wikitongues/logoVariations.png">
                  {(src) => <img src={src} alt="" className="b"/>}
                </ProgressiveImage>
                <figcaption>The Wikitongues logo represent a person waving out, arms outstretched.</figcaption>
              </figure>
              <section className="two-col">
                <p>We experimented with the idea of different writing systems but moved away from that because a large number of languages are not written. A truly human project needed to account for that as well.</p>
                <p>Other explorations looked at animals who communicate with each other. Symbols like dogs or birds were graphically interesting, but were a bit too literal. We sought something more primordial, like a gesture, a hand painting on a cave wall.</p>
                <p>That's when we got to the current symbol representing a person with outstretched arms, waving hello. The warmth and friendliness came through in this easily recognizable, instantly distinguishable glyph.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
