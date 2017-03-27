import React, { Component } from 'react';
import Resume from './components/Resume'
import Wikitongues from './components/Wikitongues'
import Poly from './components/Poly'
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
          <Route exact path="/" component={Resume}/>
          <Route path="/wikitongues" component={Wikitongues}/>
          <Route path="/poly" component={Poly}/>
          <Route path="/amicus" component={Wikitongues}/>
          <Route path="/airtable" component={Wikitongues}/>
          <Route path="/datamonkey" component={Wikitongues}/>
          <Route path="/quotidian-ventures" component={Wikitongues}/>
          <Route path="/dv01" component={Wikitongues}/>
          <Route path="/matte" component={Wikitongues}/>
          <Route path="/national-sawdust" component={Wikitongues}/>
          <Route path="/vision-into-art" component={Wikitongues}/>
        </div>
      </Router>
    );
  }
}

export default App;
