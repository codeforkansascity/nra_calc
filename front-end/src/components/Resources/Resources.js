import React, { Component } from 'react'

export class Resources extends Component {
    render() {
        return (
            <div>
                <a 
                    href="https://www.wycokck.org/WycoKCK/media/Economic-Development/Documents/CR-NRA-Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                >NRA Program Brochure</a>
                <a
                    href="https://www.wycokck.org/WycoKCK/media/Economic-Development/Documents/2018-2020-NRA-Application.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                >Application</a>
            </div>
        )
    }
}

const linkStyle = {
    fontWeight: 'bold',
    display: 'block'
};

export default Resources
