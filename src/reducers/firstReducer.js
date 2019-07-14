//import editName, from '../actions/actions';
import { SHOW_NAME, SHOW_EMAIL,EDIT_NAME } from '../actions/actions';

let initialState = {
    name: 'John',
    email: 'johnjohn@gmail.com'


}

let firstReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_NAME:
        console.log(state.name)
        return true

        case SHOW_EMAIL:
        console.log(state.email);
        return false

        case EDIT_NAME:
        return {...state, name: action.payload}
    default:
    console.log(`THis is the default ${state}`)
    return state
    }
}



export default firstReducer;