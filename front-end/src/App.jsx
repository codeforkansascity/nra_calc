import React from 'react';
import AppHeader from './components/AppHeader';
import './App.scss';
import AppFooter from './components/AppFooter';
import NRACalculator from './components/NRACalculator';

function App() {
  return (
    <div className="App">
      <AppHeader>NRA Calculator</AppHeader>
      <p>
        The Neighborhood Revitalization Act (NRA) is an effort by the Unified Government of Wyandotte County and 
        Kansas City, Kansas to promote revitalization, conservation, and redevelopment of designated areas through
        tax rebate incentives on new construction and improvements. Please begin below to calculate
        the potential tax benefits for development of a given property.
      </p>
      <NRACalculator></NRACalculator>
      <AppFooter>
        Created in partnership with <a href="https://codeforkc.org">Code for KC</a><br />
        Contribute code on <a href="https://github.com/codeforkansascity/nra_calc">Github</a>
      </AppFooter>
    </div>
  );
}

export default App;
