import React from 'react';
import './AppHeader.scss';

class AppHeader extends React.Component {
  render = () => {
    return (
      <header className="AppHeader">
        <h1>{this.props.children}</h1>
      </header>
    );
  }
}

export default AppHeader;
