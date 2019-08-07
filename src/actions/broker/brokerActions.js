export const REGISTER_BROKER = 'REGISTER_BROKER';

export function registerBroker(obj){
    return {
        type: REGISTER_BROKER,
        payload: obj
    }

}