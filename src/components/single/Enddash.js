import React from 'react';
import SingleHead from '../SingleHead'

export default class Enddash extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="EndDash"
            images={[
              {image:"media/enddash/page.jpg",placeholder:"placeholder/enddash/page.jpg",caption:"Before announcing the launch of the framework on Hacker News, it needed a shiny documentation page."},
              {image:"media/enddash/menu.png",placeholder:"placeholder/enddash/menu.png",caption:"Attention to detail adds delight to every interaction."},
              {image:"media/enddash/easterEgg.gif",placeholder:"placeholder/enddash/easterEgg.gif",caption:"We hid some Easter eggs throughout the site to surprise people trying to break stuff. 👀"},

            ]}
            visit="http://www.enddash.com/"
            />

          <div className="content">
            <div className="block three-col">
              <h1>EndDash</h1>
              <section className="one-col">
                <p>EndDash is a two-way-binding javascript templating framework built on top of semantic HTML. It was developed by the engineers at Amicus during the time I was at the company.</p>
              </section>
              <section className="two-col">
                <p>Once it reached a mature enough stage to be opened to the general public, the framework required a public documentation page. We built in a range of small interactions that showcase the strenghts of the framework throughout the docs, with bi-directional binding weaving the visitor's name througout the page.</p>
                <p>The aesthetic of the page was also derived from Amicus' own brand – the same color palette reinforces the relationship to the parent company.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}