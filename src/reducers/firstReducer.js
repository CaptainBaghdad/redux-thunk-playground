//import editName, from '../actions/actions';
import { SHOW_NAME, SHOW_EMAIL,EDIT_NAME, EDIT_EMAIL,REGISTER_USER } from '../actions/actions';

let initialState = {
    name: '',
    email: '',
    password: ''


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

        case EDIT_EMAIL: 
        return {...state, email: action.payload}

        case REGISTER_USER:
        console.log(`Data was sent successfully ${action.payload.name}`)
        return {
            name: action.payload.name,
            email: action.payload.email,
            password: action.payload.password
        }
    default:
    console.log(`THis is the default ${state}`)
    return state
    }
}



export default firstReducer;