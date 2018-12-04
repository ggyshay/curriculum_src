import * as React from 'react';
import './App.css'
import MediaQuery from 'react-responsive';

export class Texts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MediaQuery minDeviceWidth={1095}>

          <div className="text-holders">
            <div className="text-column">
              <div className="text-element-top">
                {renderCollege()}
              </div>
              <div style={{ height: '2em' }} />
              <div className="text-element-bottom">
                {renderLanguages()}
              </div>
            </div>
            <div className="text-column">
              <div className="text-element-top">
                {renderExperience()}
              </div>
              <div style={{ height: '2em' }} />
              <div className="text-element-bottom">
                {renderFrameworks()}
              </div>
            </div>
            <div className="text-column">
              <div className="text-element-top">
                {renderSoftSkills()}
              </div>
              <div style={{ height: '2em' }} />
              <div className="text-element-bottom">
                {renderInterests()}
              </div>
            </div>
          </div>
        </MediaQuery >
        <MediaQuery maxDeviceWidth={1095}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{maxWidth: '6rem'}}>
                {renderCollege()}
              </div>
              <div>
                {renderFrameworks()}
              </div>
              <div>
                {renderLanguages()}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{maxWidth: '6rem'}}>
                {renderExperience()}
              </div>
              <div>
                {renderSoftSkills()}
              </div>
              <div >
                {renderInterests()}
              </div>
            </div>
          </div>
        </MediaQuery>
        <div style={{height: '2rem'}}/>
      </React.Fragment >
    );
  }
}

const renderInterests = () => {
  return (<React.Fragment>
    <h3>Interests</h3>
    <ul>
      <li>Web Development</li>
      <li>Music</li>
      <li>Digital Signal Processing</li>
      <li>Sofware Architecture</li>
      <li>Design</li>
      <li>Education</li>
    </ul>
  </React.Fragment>)
}

const renderSoftSkills = () => {
  return (<React.Fragment>
    <h3>SoftSkills</h3>
    <ul>
      <li>Fluent English</li>
      <li>Leadership</li>
      <li>Result-Oriented</li>
      <li>Fast-Learning</li>
      <li>Persistence</li>
    </ul>
  </React.Fragment>)
}

const renderFrameworks = () => {
  return <React.Fragment>
    <h3>Frameworks</h3>
    <ul>
      <li>React</li>
      <li>React Native</li>
      <li>D3.js</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>Bootstrap</li>
      <li>Electron.js</li>
      <li>P5.js</li>
    </ul>
  </React.Fragment>
}

const renderLanguages = () => {
  return <React.Fragment>
    <h3>Languages</h3>
    <ul>
      <li>C</li>
      <li>Python</li>
      <li>Java</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>MySQL</li>
    </ul>
  </React.Fragment>
}

const renderCollege = () => {
  return <React.Fragment>
    <h3>College</h3>
    <p>Computer Engineering - USP polytechnic School</p>
  </React.Fragment>
}

const renderExperience = () => {
  return <React.Fragment>
    <h3>Experience</h3>
    <p>Taqtile Brasil - Mobile Developer - 2018</p>
  </React.Fragment>
}