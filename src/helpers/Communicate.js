import {getResponse} from './backendFunctions';

export async function sendAnswer(q,a,botConfig={}){
    if(typeof botConfig.botname !== 'undefined' && typeof botConfig.username !== 'undefined'){
        return getResponse(q,a,botConfig.botname,botConfig.username)
    }
    return getResponse(q,a);
}