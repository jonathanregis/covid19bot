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
        this.lastRef = React.createRef()
        this.config = {botname: this.props.botName, username: this.props.userName}
    }
    scrollToSection = () => {
        this.lastRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
      };


    componentDidMount(){
        sendAnswer(this.state.currentQuestion,'init',this.config).then(d => {
            const stateMessages = this.state.messages;
            const messageData = {
                data: d,
                from: 0
            }
            stateMessages.push(messageData);
            this.setState({loaded: true, messages: stateMessages},()=>{
                sendAnswer(this.state.currentQuestion,'hello').then(n => {
                    const stateMessages = this.state.messages;
                    const messageData = {
                        data: n,
                        from: 0
                    }
                    stateMessages.push(messageData);
                    this.setState({messages: stateMessages,currentQuestion: n.question})
                })
            })
        })
    }

    componentWillUnmount(){
        this.setState({
            loaded: false,
            messages: [],
            currentQuestion: 0
        });
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
        this.setState({messages: messages},()=>this.scrollToSection())

        sendAnswer(this.state.currentQuestion,value).then(d => {
            const stateMessages = this.state.messages;
            const messageData = {
                data: d,
                from: 0
            }
            stateMessages.push(messageData);
            this.setState({messages: stateMessages,currentQuestion: d.question},()=>this.scrollToSection());
        })
    }

    render(){
        if(!this.state.loaded){
            return (<CircularProgress />)
        }
        return (
            <Chat lastRef={this.lastRef} messages={this.state.messages} handleChoice={this.onChoice} question={this.state.currentQuestion}/>
        )
    }
}