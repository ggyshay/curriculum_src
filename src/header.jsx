import * as React from 'react';
import './App.css';
import ProfilePic from './assets/profile.jpg';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div style={{ flex: 3, marginRight: '1em' }}>
                    <img src={ProfilePic} className="profile-pic" />
                </div>
                <div style={{ flex: 15 }}>
                    <h1>Gabriel Yshay</h1>
                    <h3 className="header-info">(11) 99107-9897</h3>
                    <h3 className="header-info">ggyshay@gmail.com</h3>
                </div>
                <div style={{ flex: 2 }} ><div className="header-line"/></div>
            </div>
        );
    }
}