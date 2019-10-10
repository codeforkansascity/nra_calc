import React from 'react';
import ReactDOM from 'react-dom';
import NRACalculator from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NRACalculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
