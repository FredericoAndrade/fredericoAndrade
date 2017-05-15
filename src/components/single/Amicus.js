import React from 'react';
import Head from '../Head'
import Carousel from '../Carousel'
import ProgressiveImage from 'react-progressive-image'
import { Link } from 'react-router-dom'

export default class Amicus extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">
          <div className="singleHead">
            <Head
              visit="https://www.amicushq.com/"
            />
          </div>
          <figure className="fold" style={{backgroundColor:"#C4EEE4",borderColor:"#C4EEE4"}}></figure>
          <div className="content">
            <div className="block three-col">
              <h1>Amicus</h1>
              <section className="two-col">
                <p>Amicus is a YC-backed start-up that helps causes organize their volunteers by providing tools for phone banking and direct mail campaigns. I joined the company as a designer in late 2013, and worked to develop their brand as well as to design new app concepts. My work at Amicus consisted of two main disciplines: interaction design and branding.</p>
                <p>Both Amicus Post and the call tool were built on top of an in-house framework called <Link to="/enddash">EndDash</Link>, itself built on top of backbone.js. I also designed a documentation site for it around the time it was publically announced.</p>
              </section>
              <span><h3>Amicus Post</h3></span>
              <section className="two-col">
                <p>I joined Amicus right as they sought to develop a new direct mail tool to sell to their advocacy clients like the Democratic Congressional Campaign Comittee (DCCC) and the Human Rights Campaign Foundation, as well as local political campaigns. The tool, called Amicus Post went on to replace the company's main product.</p>
              </section>
              <figure>
                <ProgressiveImage src="media/amicus/interface/post.png" placeholder="placeholder/amicus/interface/post.png">
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <figcaption>The Amicus Post interface was prototyped in code to test out action pacing and flow retention.</figcaption>
              </figure>
              <section className="two-col">
                <p>The Post product had to successfully guide users through a potentially very complex and emotionally strange activity - sending direct mail to one's own network on behalf of a cause or organization. Limiting the number of actions to achieve success was key in combating dropoff and guaranteeing that causes were benefitting from their volunteer's actions.</p>
              </section>
              <figure>
                <ProgressiveImage src="media/amicus/interface/post1.png" placeholder="placeholder/amicus/interface/post1.png">
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <figcaption>Amicus Post used Facebook's API and their own proprietary data magic to determine addresses.</figcaption>
              </figure>
              <section className="two-col">
                <p>The tool took the shape of a two-step process in which the user approves and customizes a postcard with a picture and signature, and then selects friends from facebook to receive real, physical copies of the postcard at home. How, you might ask? </p><p>Magic.</p>
              </section>
              <span><h3>Admin Redesign</h3></span>
              <section className="two-col">
                <p>The need to redesign the admin interface came from the need to scale. The original admin tool required significant training, and as the organization took on new clients, onboarding time became an expensive resource.</p>
              </section>
              <figure>
                <ProgressiveImage src="media/amicus/interface/admin.png" placeholder="placeholder/amicus/interface/admin.png">
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <figcaption>The Amicus admin interface is where all organization activities are conducted. All campaigns are managed via the admin product.</figcaption>
              </figure>
              <figure>
                <ProgressiveImage src="media/amicus/interface/admin1.png" placeholder="placeholder/amicus/interface/admin1.png">
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <ProgressiveImage src="media/amicus/interface/admin2.png" placeholder="placeholder/amicus/interface/admin2.png">
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <figcaption>The campaign creation flow was broken down into clear steps, and empowered users to create assets on the go, a departure from the original need for pre-existing assets.</figcaption>
              </figure>
              <section className="two-col">
                <figure>
                  <ProgressiveImage src="media/amicus/interface/process.jpg" placeholder="placeholder/amicus/interface/process.jpg">
                    {(src) => <img src={src} alt=""/>}
                  </ProgressiveImage>
                  <figcaption>Admin interface update sketch</figcaption>
                </figure>
              </section>
              <span><h3>Amicus Post Brand</h3></span>
              <section className="two-col">
                <p>The Amicus brand was mature by the time I joined the company, but they still needed a few pieces of collateral produced, such as business cards and stickers. Then with the advent of Amicus Post, the opportunity arose to distinguish it from the call tool through visual identity.</p>
              </section>
              <figure>
                <ProgressiveImage src="media/amicus/design/brandIllustrations.png" placeholder="placeholder/amicus/design/brandIllustrations.png">
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <figcaption>Amicus Post illustrations</figcaption>
              </figure>
              <section className="two-col">
                <p>The tool was intended to be very easy to use, and targeted a broad demographic, with users ranging form teenagers to the elderly. Therefore the image of the product needed to be soft and playful.</p>
              </section>
              <figure>
                <ProgressiveImage src="media/amicus/design/brandIllustrations1.png" placeholder="placeholder/amicus/design/brandIllustrations1.png">
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <figcaption>Amicus Post illustrations</figcaption>
              </figure>
              <section className="two-col">
                <p>I took queues from Roald Dahl's illustrations to produce a youthful, though sober, approach to this community-oriented product.</p>
              </section>
              <figure>
                <ProgressiveImage src="media/amicus/design/brandIllustrations2.png" placeholder="placeholder/amicus/design/brandIllustrations2.png">
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <figcaption>Amicus Post illustrations</figcaption>
              </figure>
              <figure>
                <ProgressiveImage src="media/amicus/design/squirrel.jpg" placeholder="placeholder/amicus/design/squirrel.jpg">
                  {(src) => <img src={src} alt=""/>}
                </ProgressiveImage>
                <figcaption>Amicus had a wonderful workplace culture, which we sought to capture in our outreach.</figcaption>
              </figure>

            </div>
          </div>
          <Carousel
            images={[
              {image:"media/amicus/interface/page.jpg",placeholder:"placeholder/amicus/interface/page.jpg",caption:"The tool guides volunteers through the process of selecting friends to send campaign postcards to."},
              {image:"media/amicus/design/page.jpg",placeholder:"placeholder/amicus/design/page.jpg",caption:"Amicus Post is a tool to streamline direct mail campaigns."},
              {image:"media/amicus/design/presentation.png",placeholder:"placeholder/amicus/design/presentation.png",caption:"Amicus Post had to be accessible and fun, so an illustrated aesthetic fit really well."},
              // {image:"media/amicus/nytm.jpg",placeholder:"placeholder/amicus/nytm.jpg",caption:"Founder Seth Bannon presents my tool Amicus Post at the New York Tech Meetup"},
            ]}
            />
        </div>
      </div>
    )
  }
}