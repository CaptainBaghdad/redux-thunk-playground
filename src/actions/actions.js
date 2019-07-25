export const SHOW_NAME = 'SHOW_NAME';
export const SHOW_EMAIL = 'SHOW_EMAIL';
export const EDIT_NAME = 'EDIT_NAME';
export const EDIT_EMAIL = 'EDIT_EMAIL';
export const REGISTER_USER = 'REGISTER_USER';

export function showIt() {
    return {type: SHOW_NAME}
}

export function emailIt(){
    return {type: SHOW_EMAIL}
}

export function editName(val){
    return {
        type: EDIT_NAME,
        payload: val
    }
}

export function editEmail(val){
    return {
        type: EDIT_EMAIL,
        payload: val
    }

}

export function handleRegister(cb){
    return {
         type: REGISTER_USER,
         payload: cb
        
        }

}

