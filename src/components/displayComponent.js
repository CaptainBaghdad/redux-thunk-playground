import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { showIt } from '../actions/actions';
import {emailIt} from '../actions/actions';



function DisplayComponent(){
    let showMoney = useSelector(state => state.name);
    let showEmail = useSelector(state => state.email);
    let dispatch = useDispatch();
    
    return (
        <div>
            <p>name: {showMoney}</p>
            <br/>
            <p>Email : {showEmail}</p>
        </div>
       
        


    )
}

/*const mapStateToProps = (state) =>{
    return {
        name: state.name,
        email: state.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showIt: () =>  dispatch({type: 'SHOW_NAME'}),
        emailIt: () => dispatch({type: 'SHOW_EMAIL'})

    }
}*/


export default DisplayComponent;