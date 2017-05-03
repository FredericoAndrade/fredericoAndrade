import React, { Component } from 'react';
import Resume from './components/Resume'
import Wikitongues from './components/single/Wikitongues'
import Poly from './components/single/Poly'
import Amicus from './components/single/Amicus'
// import Enddash from './components/single/Enddash'
// import SamGuest from './components/single/SamGuest'
// import Airtable from './components/single/Airtable'
// import Datamonkey from './components/single/Datamonkey'
// import Quotidian from './components/single/Quotidian'
// import DV01 from './components/single/DV01'
// import Matte from './components/single/Matte'
// import NationalSawdust from './components/single/NationalSawdust'
// import VisionIntoArt from './components/single/VisionIntoArt'
// import Matchbook from './components/single/Matchbook'
// import MichelleBogre from './components/single/MichelleBogre'
// import MeAndYou from './components/single/MeAndYou'
import Gallery from './components/Gallery'
import More from './components/single/More'
import './css/App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isResumeOpen: true
    };
  }

  toggleView() {
    this.setState({
      isResumeOpen: !this.state.isResumeOpen
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/resume" component={Resume}/>
          <Route path="/wikitongues" component={Wikitongues}/>
          <Route path="/poly" component={Poly}/>
          <Route path="/amicus" component={Amicus}/>
          <Route path="/more" component={More}/>
          <Route exact path="/" component={Gallery}/>
        </div>
      </Router>
    );
  }
}

export default App;
