import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {handleRegister} from '../actions/actions';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
//import { classes } from 'istanbul-lib-coverage';

function RegisterComponent(props){
    const useStyles = makeStyles(theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        input: {
          margin: theme.spacing(1),
        }
      }));

let dispatch = useDispatch();
let classes  = useStyles();
    return (
        <Grid container  >
            <h2>Please fill out the form</h2>
        <Grid item sm={8}>
            <form onSubmit={() => dispatch(handleRegister(handleSubmit()))} >
                Name <Input type="text" id="name" name="name" className={classes.input} />
                <br/>
                Email <Input type="text" id="email" name="email" className={classes.input} />
                <br/>
                Password <Input type="text" id="password" name="password" className={classes.input} />
                <br/>
                Company Name <Input type="text" id="companyName" name="companyName" className={classes.input} />
                <br/>
                Years Experience<Input type="text" id="yearsExperience" name="yearsExperience" className={classes.input} />
                <br/>
                Trailer Type <Input type="text" id="trailerType" name="trailerType" className={classes.input} />
                <br/>
                <Button type="submit" varient="contained" color="secondary">Submit</Button>
            </form>

            </Grid>
        </Grid>
    )

}

function handleSubmit(){
    let userData =  {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        companyName: document.getElementById('companyName').value,
        yearsExperience: document.getElementById('yearsExperience').value,
        trailerType: document.getElementById('trailerTypea').value

    }

    return fetch('http://localhost:3250/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    .then(res => res.json())
    .then(data =>{
        
        return data
    })

    



}

export default RegisterComponent;