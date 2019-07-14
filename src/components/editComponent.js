import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { editName, editEmail } from '../actions/actions';
 
 function ChangeName(props){
    //let newName = event.target.value;
    let dispatch = useDispatch();
    let newnew = useSelector(state => state.name)

    return (
        <div>
            <input type="text" id="name" name="name" /><br/>
            <input type="text" id="email" name="email" />
            <br/>
            <button onClick={() => dispatch(editName(setTheEmail()))}></button>
            <br/><br/>
            <p>The new name is :{newnew}</p>
        </div>
    )

} 

function setTheValue(){
    let vizzy = document.getElementById('name').value;
    //let emizzy = document.getElementById('email').value;
    return vizzy;

}

function setTheEmail(){
    let vizzy = document.getElementById('email').value;
    return vizzy;
}


export default ChangeName;