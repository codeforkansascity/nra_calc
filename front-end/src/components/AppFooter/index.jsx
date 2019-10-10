import React from 'react';
import './AppFooter.scss';

class AppFooter extends React.Component {
  render = () => (
    <footer className="AppFooter">
      <p>{this.props.children}</p>
    </footer>
  )
}

export default AppFooter;
