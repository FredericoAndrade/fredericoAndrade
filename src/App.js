import React, { Component } from 'react';
import Resume from './components/Resume'
import Wikitongues from './components/single/Wikitongues'
import Poly from './components/single/Poly'
import Amicus from './components/single/Amicus'
import Gallery from './components/Gallery'
import './css/App.css';
import {
  BrowserRouter as Router,
  Route,
  hashHistory
} from 'react-router-dom'


class App extends Component {
  // static propTypes = {
  //   children: PropTypes.node
  // }

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
      <Router history={hashHistory}>
        <div>
          <Route path="/resume" component={Resume}/>
          <Route path="/wikitongues" component={Wikitongues}/>
          <Route path="/poly" component={Poly}/>
          <Route path="/amicus" component={Amicus}/>
          <Route exact path="/" component={Gallery}/>
        </div>
      </Router>
    );
  }
}

export default App;
