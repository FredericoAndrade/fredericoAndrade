import React from 'react';
import Head from '../Head'
import Carousel from '../Carousel'
import ProgressiveImage from 'react-progressive-image'
import { Link } from 'react-router-dom'

export default class Poly extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">
          <div className="singleHead">
            <Head
              visit="https://poly.wikitongues.org/"
            />
          </div>
          <figure className="fold" style={{backgroundImage:"url(media/poly/interface/mobile.jpg)"}}></figure>
          <div className="content">
            <div className="block three-col">
              <h1>Poly</h1>
              <section className="two-col">
                <p>Poly is open source, modern software to share and learn every language in the world. It is a web app designed to advance the mission of the non-profit organization <Link to="/wikitongues">Wikitongues</Link>, empowering it to produce and aggregate educational materials in every language in the world.</p>
                <p>While awareness-raising is an important layer of Wikitongues' mission, it does not go far enough in providing access to language. Originally focused on raising awareness about linguistic diversity by producing, collecting and publishing oral history videos in every language in the world, it did not take long for the organization to realize the need to offer greater access to the languages themselves, and saw an opportunity to create value for the communities who speak them. I resolved to develop a platform to empower speakers and signers of every language in the world to share and document their own languages on an intuitive, free and open platform. </p>
                <p>This application empowers anyone with an internet connection to produce and consume language lessons and documentation, and is being used by Wikitongues to collect introductory phrases in the world's less documented languages.</p>
              </section>
              <section className="three-col">
                <figure>
                  <iframe height="571" src="https://www.youtube.com/embed/-fVDgKy7ieA?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
                  <figcaption>A video demo of the Poly app</figcaption>
                </figure>
              </section>
              <section className="two-col">
                <p>Through my involvement with Wikitongues I came across <a href="https://www.nytimes.com/2014/08/19/opinion/who-speaks-wukchumni.html?_r=0">the story</a> of Marie Wilcox, an elderly Wukchumni woman, working for the last decade on producing documentation on her mother language. Featured by the New York Times, her process was a labor of love, collecting from memory all of the vocabulary and structures she could muster. The documentation was done on pen and paper, with the aid of a voice recorder, meaning that for the majority of the process, all the content was not accessible to others.</p>
                <p>After learning about her process, I began to look around for others in similar positions, looking to produce useful documentation for their communities. Seeking to understand the commonalities between the processes undertaken by different language communities, I arrived at the conclusion that there is room to produce a tool that can empower the actions of these individuals, and contribute to the greater current of language sovereignty.</p>
                <p>At that moment, I had enough material in mind to begin defining the problem I endeavored to address, identifying my assumptions and looking around for similar projects.</p>
              </section>
              <span><h3>Problem statement</h3></span>
              <section className="two-col">
                <p>Language loss happens for two main reasons - external oppresion, such as when a government makes a given language illegal to speak or teach, or loss of access to the language, caused by a paucity of learning materials and an aging population of native speakers.</p>
                <p>Poly targets the latter. The production of learning materials is an expensive undertaking, and without proper insight into the best practices other communities around the world have arrived at, hedging a language against the decrease in access quickly becomes a titanic project.</p>
                <p>By offering free tools and an open platform on which to produce documentation, and the ease with which to immediately share the content, the platform represents a departure from the traditionally slow and static process of documenting. The network effect gained by aggregating similar projects on a single environment also serves to diffuse the knowledge aquired by those who've undertaken documentation projects before.</p>
              </section>
              <span><h3>Product design</h3></span>
              <section className="three-col">
                <figure>
                  <ProgressiveImage src="media/poly/interface/poly1.jpg" placeholder="placeholder/poly/interface/poly1.jpg">
                    {(src) => <img src={src} alt=""/>}
                  </ProgressiveImage>
                  <ProgressiveImage src="media/poly/interface/poly2.jpg" placeholder="placeholder/poly/interface/poly2.jpg">
                    {(src) => <img src={src} alt=""/>}
                  </ProgressiveImage>
                  <ProgressiveImage src="media/poly/interface/poly3.jpg" placeholder="placeholder/poly/interface/poly3.jpg">
                    {(src) => <img src={src} alt=""/>}
                  </ProgressiveImage>
                  <figcaption>Poly guides users to create phrasebooks</figcaption>
                </figure>
                <figure>
                  <ProgressiveImage src="media/poly/interface/process.png" placeholder="placeholder/poly/interface/process.png">
                    {(src) => <img src={src} alt="" className="b"/>}
                  </ProgressiveImage>
                  <figcaption>First Poly interface sketches</figcaption>
                </figure>
              </section>
              <section className="two-col">
                <p>The underlying metaphor behind the Poly interface is the now widely popular digital texting symbol. Relying on the semiotic value of the digital communication system forged over the last few decades, the Poly phrase book empowers users to create language key-value pairs translating one language to the next. We have tested our assumption that this affordance is immediately inferred by getting Poly into the hands of a wide audience of users, from young children to the elderly, and from communities submerged in connectivity to those for whom access to the internet is closely monitored.</p>
              </section>
              <span><h3>Poly the parrot</h3></span>
              <section className="two-col">
                <p>The world of language preservation is traditionally very dry and academic. The tools that do exist in the world are made for a trained and financially interested audience, meaning the products themselves need have little in the way of delightful identity.</p>
              </section>
              <section className="three-col">
                <figure>
                  <ProgressiveImage src="media/poly/logo/banner.jpg" placeholder="placeholder/poly/logo/banner.jpg">
                    {(src) => <img src={src} alt=""/>}
                  </ProgressiveImage>
                  <figcaption>A marketing banner</figcaption>
                </figure>
              </section>
              <section className="two-col">
                <p>The Poly platform was conceived to be as straightforward and pleasant to use as possible. To capture the ease of use and communicate that the platform is intended to appeal to a general audience, Poly needed a symbol that could communicate all of this easily and effectively. As such, the direction of a character was chosen. The character Poly is rendered in a cartoonish style that lends itself easily to future animation, and can be easily scaled for print materials. The animal chosen to represent the product is a rare blue macaw, endemic to the Amazon basin. The species itself represents the use of language, the value of cultural heritage, and the risks our human diversity faces.</p>
              </section>
              <section className="three-col">
                <figure>
                  <ProgressiveImage src="media/poly/poly.jpg" placeholder="placeholder/poly/poly.jpg">
                    {(src) => <img src={src} alt=""/>}
                  </ProgressiveImage>
                  <figcaption>Iterating on silhouette and surface features</figcaption>
                  </figure>
                </section>
                <section className="three-col">
                  <figure>
                  <ProgressiveImage src="media/poly/pencilTests.png" placeholder="placeholder/poly/pencilTests.png">
                    {(src) => <img src={src} alt="" className="b"/>}
                  </ProgressiveImage>
                  <figcaption>Early pencil tests</figcaption>
                </figure>
              </section>
            </div>
          </div>
          <Carousel
            images={[
              {image:"media/poly/interface/page.jpg",placeholder:"placeholder/poly/interface/page.jpg",caption:"Poly is a tool to share and learn every language in the world."},
              {image:"media/poly/interface/mobile.jpg",placeholder:"placeholder/poly/interface/mobile.jpg",caption:"Poly needs to be accessible to people all over the world."},
              {image:"media/poly/interface/process3.jpg",placeholder:"placeholder/poly/interface/process3.jpg",caption:"For all of the simplicity from the user's side, Poly has a lot of complexity."},
              {image:"media/poly/logo/poster.jpg",placeholder:"placeholder/poly/logo/poster.jpg",caption:"The blue macaw Poly represents hope and determination in the face of adversity"},
              ]}
            />
        </div>
      </div>
    )
  }
}

