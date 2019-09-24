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
            </div>
        )
    }
}

const linkStyle = {
    fontWeight: 'bold'
};

export default Resources
