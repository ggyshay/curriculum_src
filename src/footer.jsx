import * as React from 'react';
import './footer.css';

export class Footer extends React.Component{
    render() {
        return (
            <div className='footer'>
                <p>Other projects on <a href='https://github.com/ggyshay'>GitHub</a></p>
            </div>
        )
    }
}