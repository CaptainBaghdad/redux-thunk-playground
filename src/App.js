import React from 'react';

import {connect} from 'react-redux';

import DisplayComponent from './components/displayComponent';
import ChangeName from './components/editComponent';


function App() {
  return (
    <div className="App">
    <DisplayComponent />
    <ChangeName/>
    </div>
  );
}

export default App;
