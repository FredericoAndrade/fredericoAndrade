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
            title="Poly"
            visit="https://poly.wikitongues.org/"
          />
          <Carousel
            images={[
              {image:"media/poly/interface/page.jpg",placeholder:"placeholder/poly/interface/page.jpg",caption:"Poly is a tool to share and learn every language in the world."},
              {image:"media/poly/interface/mobile.jpg",placeholder:"placeholder/poly/interface/mobile.jpg",caption:"Poly needs to be accessible to people all over the world."},
              {image:"media/poly/interface/process3.jpg",placeholder:"placeholder/poly/interface/process3.jpg",caption:"For all of the simplicity from the user's side, Poly has a lot of complexity."},
              {image:"media/poly/logo/poster.jpg",placeholder:"placeholder/poly/logo/poster.jpg",caption:"The blue macaw Poly represents hope and determination in the face of adversity"},
              ]}
            />
          </div>

          <div className="content">
            <div className="block three-col">
              <h1>Poly</h1>
              <section className="two-col">
                <p>Poly is open source, modern software to share and learn every language in the world.</p>
                <p>While awareness-raising is an important layer of Wikitongues' mission, it does not go far enough in providing access to language. <Link to="/wikitongues">Wikitongues</Link> resolved to develop the platform to empower speakers and signers of every language in the world to share and document their own languages on an easy and simple platform. </p>
                <p>The application empowers anyone to produce language lessons and documentation, and is being used by Wikitongues to collect introductory phrases in the world's less documented languages.</p>
              </section>
              <section className="three-col">
                <figure>
                  <iframe height="571" src="https://www.youtube.com/embed/-fVDgKy7ieA?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
                  <figcaption>A video demo of the Poly app</figcaption>
                </figure>
              </section>
              <section className="two-col">
                <p>Designed to be used by anyone regardless of familiarity with the platform, close attention was paid to interface affordances and semotic transfer.</p>
              </section>
              <span><h3>Product design</h3></span>
              <section className="three-col">
                <figure>
                  <ProgressiveImage src="media/poly/interface/interface.png" placeholder="placeholder/poly/interface/interface.png">
                    {(src) => <img src={src} alt="" className="b"/>}
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
                <p>The underlying metaphor behind the Poly interface is the now widely popular digital texting symbol. Relying on the semiotic value of the digital communication system forged over the last few decades, the Poly phrase book empowers users to create language key-value pairs translating one language to the next. We have tested our assumption that this is an immediately inferrable affordance by getting Poly into the hands of a wide audeince of users, from young children to the elderly, and from communities submerged in connectivity to those for whom access to the internet is closely monitored.</p>
              </section>
              <span><h3>Logo and brand</h3></span>
              <section className="three-col">
                <figure>
                  <ProgressiveImage src="media/poly/poly.jpg" placeholder="placeholder/poly/poly.jpg">
                    {(src) => <img src={src} alt=""/>}
                  </ProgressiveImage>

                  <ProgressiveImage src="media/poly/pencilTests.png" placeholder="placeholder/poly/pencilTests.png">
                    {(src) => <img src={src} alt="" className="b"/>}
                  </ProgressiveImage>
                  <figcaption>Poly character pencil tests</figcaption>
                </figure>
              </section>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

