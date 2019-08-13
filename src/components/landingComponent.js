import React from 'react';
import RegisterComponent from './registerComponent';
import BrokerRegisterComponent from './components/broker/brokerRegisterComponent';
import './css/main.css';
import Grid from '@material-ui/core/Grid'

function LandingComponent(props){
    
    
    return (
            <Grid
                container
                alignItems="stretch" 

            >
            <RegisterComponent/>
            <BrokerRegisterComponent />

        </Grid>
    )


}


export default LandingComponent;