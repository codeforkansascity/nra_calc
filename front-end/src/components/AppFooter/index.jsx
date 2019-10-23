import React from 'react';
import './AppFooter.scss';
import PropTypes from 'prop-types';

class AppFooter extends React.Component {
  render = () => {
    return (
      <footer className="AppFooter">
        <p>{this.props.children}</p>
      </footer>
    );
  }
}

AppFooter.propTypes = {
  children: PropTypes.any
}

export default AppFooter;
