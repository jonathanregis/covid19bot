import React from 'react';
import {CircularProgress} from '@material-ui/core';
import Chat from './Chat';
import {sendAnswer} from '../helpers/Communicate';
import moment from 'moment';

export default class ChatBot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            messages: [],
            currentQuestion: 0
        }
    }

    componentDidMount(){
        sendAnswer(this.state.currentQuestion,'hello').then(d => {
            const stateMessages = this.state.messages;
            const messageData = {
                data: d,
                from: 0
            }
            stateMessages.push(messageData);
            this.setState({loaded: true, messages: stateMessages})
        })
    }

    onChoice = (value) =>{
        const time = moment(Date()).calendar();
        const messages = this.state.messages;
        const messageData = {
            data: {message: value, time: time},
            from: 1
        }
        messages.push(messageData);
        messages.forEach((item, index) => {
            item.data.disabled = true;
        })
        this.setState({messages: messages})

        sendAnswer(this.state.currentQuestion,value).then(d => {
            const stateMessages = this.state.messages;
            const messageData = {
                data: d,
                from: 0
            }
            stateMessages.push(messageData);
            this.setState({messages: stateMessages});
        })
    }

    render(){
        if(!this.state.loaded){
            return (<CircularProgress />)
        }
        return (
            <Chat messages={this.state.messages} handleChoice={this.onChoice} question={this.state.currentQuestion}/>
        )
    }
}