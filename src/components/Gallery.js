import React from 'react';
import { Link } from 'react-router-dom'

export default class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="App tk-adobe-garamond-pro">
        <h1 className="statement tk-adobe-garamond-pro">Freddie: Product design.</h1>
        <ul id="galleryIndex">
          <h3 className="breadcrumb">Check out some of his work below</h3>
          <Link to="amicus" className="floater">– designed tools for distributed grassroots movements and political campaigns around the world at YC-backed company Amicus</Link>
          <li><Link to="amicus">Amicus</Link></li>
          <li><Link to="poly">Poly</Link></li>
          <li><Link to="wikitongues">Wikitongues</Link></li>
          <Link to="wikitongues" className="floater">- fought to prevent the deaths of half of the worlds languages through Wikitongues, designing and building technology to support that cause.</Link>
        </ul>
        <nav className="secondary">
          <ul>
            <li><Link to="/resume">Résumé</Link></li>
            <li><a href="https://www.github.com/fredericoandrade" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/fred-andrade/" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.dropbox.com/s/p9cd2kqqwa7qgc1/Abridged%20Portfolio.pdf?dl=0" target="_blank">More work <span>(pdf)</span></a></li>
          </ul>
        </nav>
        <footer className="index">
          <p>All work is Freddie's unless otherwise explicitly stated.</p>
          <p>Freddie is open to new and exciting opportunities to do good work. For inquiries, please reach out at <a href="mailto:faandrade@gmail.com">faandrade@gmail.com</a>.</p>
          <p>This website is made with <a href="https://facebook.github.io/react/">React.js</a>, hosted on <a href="https://www.heroku.com">Heroku</a> and uses some <a href="https://github.com/akiran/react-slick">wonderful</a> <a href="https://github.com/FormidableLabs/react-progressive-image">components</a>! The code is all on <a href="https://github.com/fredericoandrade/fredericoandrade">Github</a> too.</p>
        </footer>
      </div>
    )
  }
}
