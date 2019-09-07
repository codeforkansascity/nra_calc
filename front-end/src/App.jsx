import React from 'react';
import AppHeader from './components/AppHeader';
import './App.scss';
import AppFooter from './components/AppFooter';
import NRACalculator from './components/NRACalculator';

function App() {
  return (
    <div className="App">
      <AppHeader>Neighborhood Revitalization Act Calculator</AppHeader>
      <p>
        This is an effort by the Unified Government of Wyandotte County and 
        Kansas City, Kansas to promote revitalization of designated areas through
        tax incentives on new construction and improvements. Start below to estimate your potential tax incentive.
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
