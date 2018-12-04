import * as React from 'react';
import SoundDesignerImage from './assets/Group 1.png'
import ARAImage from './assets/Group 2.png';
import EvolutionImage from './assets/Group 3.png';
import UniverhouseImage from './assets/Group 4.png';

export class Projects extends React.Component {
    render() {
        return (
            <div>
                <a href="https://sound-designer-gffjoyiztm.now.sh" >
                    <div className="project sound">
                        <img src={SoundDesignerImage} />
                        <div className="project-content align-left">
                            <h2>Sound Designer</h2>
                            <p>Tool for sound designing built with React, d3.js and web audio API.</p>
                        </div>
                    </div>
                </a>
                <div className="project ara">
                    <img src={ARAImage} />
                    <div className="project-content align-right">
                        <h2>ARA App</h2>

                        <p>Live music creator based in samples. Created with web languages and built on top of Electron framework.</p>
                    </div>
                </div>
                <div className="project evolution" >
                    <img src={EvolutionImage} />
                    <div className="project-content align-left">
                        <h2>Evolution</h2>
                        <p>Genetic Algorithm applied to a simulation of a natural envirolvment with prey and predator in real time. Implemented in web languages.</p>
                    </div>

                </div>
                <div className="project univerhouse"  >
                    <img src={UniverhouseImage} />
                    <div className="project-content align-right">
                        <h2>Univerhouse</h2>
                        <p>App to rent and buy properties. Built for real use, on React.js with bootstrap, express.js for a REST API and MySQL database</p>
                    </div>
                </div>
            </div>
        );
    }
}