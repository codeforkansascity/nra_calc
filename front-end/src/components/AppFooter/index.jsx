import React from 'react';
import PropTypes from 'prop-types';
import './AppFooter.scss';

const AppFooter = (props) => {
  const { children } = props;
  return (
    <footer className="AppFooter">
      <p>{children}</p>
    </footer>
  );
};

AppFooter.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AppFooter;
