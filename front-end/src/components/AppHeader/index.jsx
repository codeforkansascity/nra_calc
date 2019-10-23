import React from 'react';
import './AppHeader.scss';
import PropTypes from 'prop-types';

class AppHeader extends React.Component {
  render = () => {
    return (
      <header className="AppHeader">
        <h1>{this.props.children}</h1>
      </header>
    );
  }
}

AppHeader.propTypes = {
  children: PropTypes.any
}

export default AppHeader;
