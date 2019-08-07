import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import {useSelector,useDispatch} from 'react-redux';
import registerBroker from '../../actions/broker/brokerActions';


class BrokerRegisterComponent extends Component{

    handleChange = () =>{

    }

    handleSubmit = () =>{

    }

render(){
    return (
        <Grid>
            <h1>Broker?</h1>
            
        <Grid item sm={8}>
        <p>Please sign up here and you can connect with our vast network oof drivers</p>
        


        </Grid>
        </Grid>
    )
}

}


export default BrokerRegisterComponent;