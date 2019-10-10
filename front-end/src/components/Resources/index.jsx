import React from 'react';

const linkStyle = {
  fontWeight: 'bold',
  marginBottom: '1em',
  textAlign: 'center',
  display: 'block',
};

const Resources = () => (
  <div style={{ textAlign: 'center' }}>
    <a
      href="https://www.wycokck.org/WycoKCK/media/Economic-Development/Documents/CR-NRA-Brochure.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
    >
      <h2>Brochure</h2>
    </a>
    <p>
      Details about the Neighborhood Revitalization Act including contact
      information, what types of properties qualify, information about
      zones, etc.
    </p>
    <a
      href="https://www.wycokck.org/WycoKCK/media/Economic-Development/Documents/2018-2020-NRA-Application.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
    >
      <h2>Application</h2>
    </a>
    <p>
      Begin the application process by filling out this form. The
      application includes details about how to submit for processing.
    </p>

    <h2 label="Contact">Contact information</h2>
    <div>
      <p> Stephanie M. Moore</p>
    </div>
    <div>
      <p>smmoore@wycokck.org</p>
    </div>
    <div>
      <p> (913) 573-5730</p>
    </div>
  </div>
);

export default Resources;
