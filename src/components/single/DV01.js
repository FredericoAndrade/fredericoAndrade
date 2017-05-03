import React from 'react';
import SingleHead from '../SingleHead'

export default class DV01 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="dv01"
            images={[
              {image:"media/dv01/page.jpg",placeholder:"placeholder/dv01/page.jpg",caption:"I was hired to audit the highly complex interface for clarity and power of interaction."},
              {image:"media/dv01/detail.jpg",placeholder:"placeholder/dv01/detail.jpg",caption:"Along with the product itself, branding work was done to convey reliability and power."},
            ]}
            visit="https://www.dv01.co/"
            />

          <div className="content">
            <div className="block three-col">
            <h1>dv01</h1>
              <section className="one-col">
                <p>dv01 is a financial technology platform that streamlines consumer and mortgage loan data—making markets transparent and efficient for institutional investors and safer for the world.</p>
              </section>
              <section className="two-col">
                <p>I was hired as a contractor to lead the company through a product audit, bringing to light infrastructural product decisions that needed to take place as the platform matured in the direction of the mission. That involved working with internal stakeholders to gather domain specific knowledge and to empower decisions to be made by the team.</p>
                <p>Additionally, I took a design pass at the platform's homepage and dashboard infrastructure</p>
              </section>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

