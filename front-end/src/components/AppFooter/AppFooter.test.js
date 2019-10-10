import React from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppFooter>Test</AppFooter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
