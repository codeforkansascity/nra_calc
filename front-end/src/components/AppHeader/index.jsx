import React from 'react';
import PropTypes from 'prop-types';
import './AppHeader.scss';

const AppHeader = (props) => {
  const { children } = props;
  return (
    <header className="AppHeader">
      <h1>{children}</h1>
    </header>
  );
};

AppHeader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AppHeader;
