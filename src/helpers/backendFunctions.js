//This file aims to mimic the online server response logic. There isn't much time to write a backend with a server.
//Also, not all logic from the CDC algorithms have been implemented. Due to time again. Two days is insufficient to write all the the logic and both backend and frontend.
import moment from 'moment';
import questions from './questions';
export function getResponse(question, answer, botname="", username=""){

    if(question === 0){
        if(answer === 'init'){
            return respond(0,answer,botname,username);
        }
        return respond(1,answer);
    }

    if(question === 1){
        if(answer === 'yes'){
            return respond(2,answer);
        }
        return respond(3,answer);
    }

    if(question === 2){
        return respond(3,answer);
    }

    if(question === 3){
        return respond(4,answer);
    }

    if(question === 4){
        return respond(5,answer);
    }

    if(question === 5){
        if(answer === 'yes'){
            return respond(6,answer)
        }

        return respond(7,answer);
    }

    //we don't need 6 as it's the end of triage

    if(question === 7){
        if(answer === 'yes'){
            return respond(9,answer)
        }

        return respond(8,answer);
    }

    //I normally would have built this logic in php/laravel with botman.
    //It's easy to add scenarios here, if there was more time I could've had all the scenarios.
}

function respond(q,ans,bot="Chatbot",user="User"){
    const response = questions[q];
    response.message = response.message.replace("__botname__",bot).replace("__user__",user).replace('__prev_answer__',ans)
    response.time = moment(Date()).calendar();
    return response;
}