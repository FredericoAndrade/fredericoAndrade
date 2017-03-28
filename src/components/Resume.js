import React from 'react';
import {
  Link
} from 'react-router-dom'

export default class Resume extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.onClickNav = this.onClickNav.bind(this)
  }

  onClickNav() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen})
  }

  renderMenu () {
    if(this.state.isMenuOpen) {
      return "open"
    }
  }

  render() {
    return (
      <div className="App resume tk-adobe-garamond-pro">
        <h1>Frederico<br/>Andrade</h1>
        <Link to="/portfolio" className="linkTo r">Portfolio</Link>
        <nav className={this.renderMenu()}>
          <section className={this.renderMenu()}>
            <h1><button onClick={this.onClickNav}>*</button></h1>
            <div className="background">
              <ul>
                <li>
                  <h2><a onClick={this.onClickNav} href="#Experience">Experience</a></h2>
                </li>
                <li>
                  <h2><a onClick={this.onClickNav} href="#Awards">Awards, Press</a></h2>
                </li>
                <li>
                  <h2><a onClick={this.onClickNav} href="#Education">Education</a></h2>
                </li>
                <li>
                  <h2><a onClick={this.onClickNav} href="#Contact">Contact</a></h2>
                </li>
                <li>
                  <h2><a onClick={this.onClickNav} href="#Statement">Statement</a></h2>
                </li>
                <li>
                  <h2><a onClick={this.onClickNav} href="#Disciplines">Disciplines</a></h2>
                </li>
                <li>
                  <h2><a onClick={this.onClickNav} href="#Software">Software</a></h2>
                </li>
                <li>
                  <h2><a onClick={this.onClickNav} href="#Languages">Languages</a></h2>
                </li>
                <li>
                  <h2><a onClick={this.onClickNav} href="#Wikitongues">Wikitongues</a></h2>
                </li>
              </ul>
            </div>
          </section>
        </nav>
        <div id="content">
          <div id="main">
            <section id="Experience">
              <h2>Experience</h2>
              <article>
                <span className="body">
                  {/*<h3><a href="https://www.wikitongues.org">Wikitongues</a></h3>*/}
                  <h3><Link to="/wikitongues">Wikitongues</Link></h3>
                  <p className="description">Co-founder, chief platform officer, board member (volunteer). I crafted the organization’s brand meeting strategic goals, and produced all of the collateral (business cards, pamplhets, presentation materials, ads). I conceived, designed and implemented an open source tool <Link to="/poly">Poly</Link>{/*<a href="https://poly.wikitongues.org">Poly</a>*/} to advance the organziation’s mission, presented it by invitation at the New York Tech Meetup’s respected <a href="https://vimeo.com/127205159#t=3133s">Hack of the Month</a> segment and raised a <a href="https://www.kickstarter.com/projects/wikitongues/poly-share-and-learn-every-language-in-the-world">record breaking</a> kickstarter campaign to build it and the distributed team of open source contributors that helps me maintain it.</p>
                </span>
                <span className="date">
                  <p>2013 to date <br/> Full-time from 01.2016</p>
                </span>
              </article>
              <article>
                <span className="body">
                  {/*<h3><a href="https://www.amicushq.com">Amicus</a></h3>*/}
                  <h3><Link to="/amicus">Amicus</Link></h3>
                  <p className="description">Product manager, front-end developer, ui/ux designer at this Y Combinator company. I branded, led product design and strategy, and managed the implementation of <a href="https://amicushq.com">Amicus Post</a>, a tool that replaced the core business and was featured at <a href="https://vimeo.com/101928830#t=2183s">NY Tech Meetup</a>. Amicus Post is a widely used direct action tool for political advocacy and outreach, trusted by Airbnb, the Human Rights Campaign, Greenpeace, Everytown for Gun Safety and many more. Amicus has since rebranded the business to use the visual vocabulary I developed for Amicus Post.</p>
                </span>
                <span className="date">
                  <p>10.2013 to 05.2015</p>
                </span>
              </article>
              <article>
                <span className="body">
                  <h3>Additional Contracting</h3>
                  <p className="description">Design and implementation of branding, product ui/ux and marketing websites.  roughout the last few years, I have taken on a range of contracting opportunities to broaden my horizons and network, and have the  exibility to implement new stylistic approaches and usability feels. Clients include <Link to="/airtable">Airtable</Link>{/*<a href="https://airtable.com">Airtable</a>*/}, <Link to="/datamonkey">Datamonkey</Link>, <Link to="/quotidian-ventures">Quotidian Ventures</Link>{/*<a href="http://www.quotidian.co/">Quotidian Ventures</a>*/}, <Link to="/"dv01>DV01</Link>{/*<a href="https://www.dv01.co">DV01</a>*/}, <Link to="/matte">Matte</Link>{/*<a href="https://matteprojects.com/">Matte</a>*/}, the <Link to="/nationa-sawdust">National Sawdust</Link>{/*<a href="https://nationalsawdust.org/">National Sawdust</a>*/} and <Link to="/vision-into-art">Vision Into Art</Link>{/*<a href="http://visionintoart.com/">Vision Into Art</a>*/}.</p>
                </span>
                <span className="date">
                  <p>08.2013 to 12.2015</p>
                </span>
              </article>
              <article>
                <div className="body more">...</div>
              </article>
            </section>
            <section id="Awards">
              <h2>Awards, Press</h2>
              <article>
                <span className="body">
                  <h3><a href="https://creatorsandcreatives.com/as-languages-go-extinct-2595afdf2ed4#.cza79wqdf">Creators and Creatives</a></h3>
                  <p className="description">“In a time when languages are dying out at an unprecedented rate, Frederico Andrade strives to preserve the world’s linguistic diversity.”</p>
                </span>
                <span className="date">
                  <p>06.2016</p>
                </span>
              </article>
              <article>
                <span className="body">
                  <h3><a href="https://twitter.com/recursecenter/status/718834500541751296">Recurse Center Hackathon</a></h3>
                  <p className="description">Partnered with prestigious computer programming school for Poly hackathon</p>
                </span>
                <span className="date">
                  <p>04.2016</p>
                </span>
              </article>
              <article>
                <span className="body">
                  <h3><a href="https://www.pri.org/stories/2016-02-23/nonprofit-wants-build-tool-share-and-document-all-world-s-languages">Public Radio International</a></h3>
                  <p className="description">“This nonprofit wants to build a tool to share [...] all the world’s languages”</p>
                </span>
                <span className="date">
                  <p>02.2016</p>
                </span>
              </article>
              <article>
                <span className="body">
                  <h3><a href="https://www.kickstarter.com/projects/wikitongues/poly-share-and-learn-every-language-in-the-world">Record breaking Kickstarter campaign</a></h3>
                  <p className="description">Most funded campaign in the translation category</p>
                </span>
                <span className="date">
                  <p>03.2015</p>
                </span>
              </article>
              <article>
                <span className="body">
                  <h3><a href="https://vimeo.com/127205159#t=3133s">New York Tech Meetup</a></h3>
                  <p className="description">Hack of the month by invitation for Poly</p>
                </span>
                <span className="date">
                  <p>06.2014</p>
                </span>
              </article>
              {/*<article>
                <span className="body">
                  <h3><a href="http://www.wallpaper.com/lifestyle/epfl-ecal-lab-pushes-our-buttons-with-its-lazy-bytes-project">Wallpaper* Magazine, Lazy Bytes</a></h3>
                  <p className="description">“EPFL + ECAL lab pushes our buttons with its ‘lazy bytes’ project”</p>
                </span>
                <span className="date">
                  <p>11.2012</p>
                </span>
              </article>*/}
              <article>
                <div className="body more">...</div>
              </article>
            </section>
            <section id="Education">
              <h2>Education</h2>
              <article>
                <span className="body">
                  <h3>Parsons, the New School for Design</h3>
                  <p className="description">Valedictorian, design and technology bfa</p>
                </span>
                <span className="date">
                  <p>2009 - 2013</p>
                </span>
              </article>
            </section>
          </div>
          <div id="side">
            <section id="Contact">
              <h2>Contact</h2>
              <ul>
                <li>faandrade@gmail.com</li>
                <li>1 917 683 8299</li>
                <li><a href="">github.com/fredericoAndrade</a></li>
              </ul>
            </section>
            <section id="Statement">
              <h2>Statement</h2>
              <p>I was awarded the prestigious O-1 visa recognizing my work at Wikitongues and other NY tech companies. Recent responsibilities include producing Poly, a world-class web app, building and maintaining an open source developer community to support it, and bringing in top talent to the organization’s board of directors. In addition, I implemented creative strategies and partnerships to nurture and edify the organization as it scales.</p>
            </section>
            <section id="Disciplines">
              <h2>Disciplines</h2>
              <ul>
                <li>lean, agile development cycles</li>
                <li>product strategy, ui/ux</li>
                <li>full-stack software development</li>
                <li>graphic design, editorial</li>
                <li>concept art, illustration</li>
                <li>film, stop motion</li>
              </ul>
            </section>
            <section id="Software">
              <h2>Software</h2>
              <ul>
                <li></li>
                <li>rails, postgres, heroku, firebase</li>
                <li>react.js, es6, jq</li>
                <li>ember.js, handlebars</li>
                <li>node, express</li>
                <li>processing, arduino</li>
                <li>adobe creative suite, sketch</li>
                <li>autodesk entertainment suite</li>
              </ul>
            </section>
            <section id="Languages">
              <h2>Languages</h2>
              <ul>
                <li>portuguese <i>fluent</i></li>
                <li>french <i>intermediate</i></li>
                <li>spanish <i>intermediate</i></li>
                <li>italian <i>basic</i></li>
                <li>japanese <i>basic</i></li>
              </ul>
            </section>
            <section id="Wikitongues">
              <h2>Wikitongues</h2>
              <p>Wikitongues is an international 501(c)(3) non-profit I founded and am on the board of, dedicated to stopping language loss worldwide by raising awareness about cultural diversity through language, and building tools to for communities everywhere to defend, document and share their languages.</p>
            </section>
          </div>
        </div>
        <footer>
          <div className="main">
            <a className="body" href="./resume.pdf">Download this résumé</a>
          </div>
          <div className="side">March 2017</div>
        </footer>
      </div>
    )
  }
}