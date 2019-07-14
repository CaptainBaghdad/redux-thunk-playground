export const SHOW_NAME = 'SHOW_NAME';
export const SHOW_EMAIL = 'SHOW_EMAIL';
export const EDIT_NAME = 'EDIT_NAME';

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