import React from 'react';
import SingleHead from '../SingleHead'

export default class More extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="More projects"
            images={[
            //Quotidian Ventures
              {image:"media/quotidian/page.jpg",placeholder:"placeholder/quotidian/page.jpg",caption:"Quotidian Ventures needed a no-frills website to display their portfolio."},
              {image:"media/quotidian/companies.jpg",placeholder:"placeholder/quotidian/companies.jpg",caption:"The portfolio displays each company proudly with large logos."},
              {image:"media/quotidian/about.jpg",placeholder:"placeholder/quotidian/about.jpg",caption:"Sparse colors and direct messaging build a results-first brand."},
              // National Sawdust
              {image:"media/ns/banner.jpg",placeholder:"placeholder/ns/banner.jpg",caption:"Prominent imagery puts artists and curators at the forefront, giving visitors a window into each of their process."},
              {image:"media/ns/page.jpg",placeholder:"placeholder/ns/page.jpg",caption:"Artist profile page"},
              // Sam Guest
              {image:"media/samGuest/page.jpg",placeholder:"placeholder/samGuest/page.jpg",caption:"Film director Sam Guest needed a website that followed in line with his aesthetic sensibilities - no frills."},
              {image:"media/samGuest/single.jpg",placeholder:"placeholder/samGuest/single.jpg",caption:"With a bare minimum of context, each project relies on press coverage to tell the story."},
              {image:"media/samGuest/about.png",placeholder:"placeholder/samGuest/about.png",caption:"The about page leaves the viewer with more questions than it answers."},
              // Vision Into Art
              {image:"media/via/page.jpg",placeholder:"placeholder/via/page.jpg",caption:"With a focus on e-commerce, the VisionIntoArt website lists the production company's projects"},
              {image:"media/via/single.png",placeholder:"placeholder/via/single.png",caption:"Projects are extremely rich with content, and has quite the story to tell."},
              // Airtable
              // Datamonkey
              // DV01
              {image:"media/dv01/page.jpg",placeholder:"placeholder/dv01/page.jpg",caption:"I was hired to audit the highly complex interface for clarity and power of interaction."},
              {image:"media/dv01/detail.jpg",placeholder:"placeholder/dv01/detail.jpg",caption:"Along with the product itself, branding work was done to convey reliability and power."},
              // Matchbook
              {image:"media/matchbook/banner.png",placeholder:"placeholder/matchbook/banner.png",caption:"Matchbook needed calligraphic banners for the different pages in their venue recommendation app."},
              {image:"media/matchbook/page.jpeg",placeholder:"placeholder/matchbook/page.jpeg",caption:"An embellished calligraphic aesthetic."},
              // Matte
              // Me and you
              {image:"media/meAndYou/page.jpg",placeholder:"placeholder/meAndYou/page.jpg",caption:"The brand has a very loose, unconstrained feel, and the site had to convey that."},
              {image:"media/meAndYou/detail.png",placeholder:"placeholder/meAndYou/detail.png",caption:"Large images prominently display the company's strengths in art direction and design."},
              {image:"media/meAndYou/product.png",placeholder:"placeholder/meAndYou/product.png",caption:"In selling products, it is important to offer the user varied coverage."},
              // Michelle Bogre
            ]}
            />

          <div className="content">
            <div className="block three-col">
              <h1>Quotidian Ventures</h1>
              <section className="one-col">
                <p>Quotidian Ventures is an early stage investment fund that focuses on businesses with a strategic advantage in their respective industries.</p>
              </section>
              <section className="two-col">
                <p>Quotidian Ventures needed a portfolio website that provided an overview with contact information, without removing the focus from their brand and portfolio.</p>
                <p>The portfolio page brings evidence to all of Quotidian's portfolio companies with prominent logos. The fund preferred to let each company best represent themselves instead of producing original coverage, by linking to each of them.</p>
              </section>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

