import React, { Component } from 'react';
import './App.css';
import { Texts } from './texts';
import { Header } from './header'
import { Projects } from './projects';
import MediaQuery from 'react-responsive';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MediaQuery minDeviceWidth={1095}>
          <div className="App">
            <div style={{ flex: 2 }} />
            <div style={{ flex: 16 }}>
              <Header />
              <Texts />
              <Projects />
            </div>
            <div style={{ flex: 2 }} />
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1095}>
          <div className="App">
            <div style={{ flex: 2 }} />
            <div style={{ flex: 16 }}>
              <Header />
              <Texts />
            </div>
            <div style={{ flex: 2 }} />
          </div>
          <Projects />
        </MediaQuery>
      </React.Fragment>

    );
  }
}

export default App;