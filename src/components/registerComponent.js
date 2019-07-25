import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {handleRegister} from '../actions/actions';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import { makeStyles } from '@material-ui/core/styles'
import { classes } from 'istanbul-lib-coverage';

function RegisterComponent(props){
    const useStyles = makeStyles(theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        input: {
          margin: theme.spacing(1),
        },
      }));
 let dispatch = useDispatch();
let classes  = useStyles();
    return (
        <div className={classes.container}>
            <form onSubmit={() => dispatch(handleRegister(handleSubmit()))} >
                <Input type="text" id="name" name="name" className={classes} />
                <br/>
                <Input type="text" id="email" name="email" />
                <br/>
                <Input type="text" id="password" name="password" />
                <br/>
                <Button type="submit" varient="contained" color="secondary">Submit</Button>
            </form>


        </div>
    )

}

function handleSubmit(){
    return {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value

    }


}

export default RegisterComponent;