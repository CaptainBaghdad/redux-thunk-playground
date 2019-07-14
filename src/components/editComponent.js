import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { editName } from '../actions/actions';
 
 function ChangeName(props){
    //let newName = event.target.value;
    let dispatch = useDispatch();
    let newnew = useSelector(state => state.name)

    return (
        <div>
            <input type="text" id="name" name="name" />
            <button onClick={() => dispatch(editName(setTheValue()))}></button>
            <br/><br/>
            <p>The new name is :{newnew}</p>
        </div>
    )

} 

function setTheValue(){
    let vizzy = document.getElementById('name').value;
    return vizzy;

}


export default ChangeName;