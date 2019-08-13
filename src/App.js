import React from 'react';
import Grid from '@material-ui/core/Grid';
//import {connect} from 'react-redux';

//import DisplayComponent from './components/displayComponent';
//import ChangeName from './components/editComponent';
import LandingComponent from './components/registerComponent';
import BrokerRegisterComponent from './components/broker/brokerRegisterComponent';
import './css/main.css';


function App() {
  return (
    <Grid  direction="row" alignItems="stretched" justify="space-evenly">
    <div style={{backgroundImage:'url(' + require('./images/empire.jpg') + ')',
    height: '1000px', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.8'
    
    }}
     
     >
     <Grid item sm={12}>
      <LandingComponent/>
      </Grid>
      <Grid item sm={8}>
      <BrokerRegisterComponent />
      </Grid>
    </div>
    </Grid>
  );
}

export default App;
