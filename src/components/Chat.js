import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, 
    Typography, 
    List, 
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    ButtonGroup,
    TextField
} from '@material-ui/core';

const useStyles = makeStyles(theme => { 
    return {
        messageForMe: {
            borderColor: '#ccc',
            borderWidth: 1,
            borderStyle: 'solid',
            display: 'inline-block',
            padding: theme.spacing(1),
            borderRadius: 5
        },
        messageFromMe: {
            backgroundColor: theme.palette.primary.main,
            display: 'inline-block',
            padding: theme.spacing(1),
            borderRadius: 5,
            color: 'white'
        },
        myAvatar: {
            backgroundColor: theme.palette.primary.light,
        }
    }
});

const Chat = ({messages, question, handleChoice, lastRef}) => {
  const classes = useStyles();

  return (
      <div>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Covid-19 symptoms checker</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.chatSection} align="center" justify="center" direction="row" spacing={2}>
            
            <Grid item xs={12}>
                <List>
                    {messages.map((item, index) => <RenderMessage lastRef={lastRef} isLast={index === messages.length - 1 ? true : false} onChoice={handleChoice} key={index} data={item.data} from={item.from} classes={classes} />)}
                </List>
            </Grid>
        </Grid>
      </div>
  );
}

function RenderMessage({from,data,key,classes,onChoice,isLast, lastRef}){
    if(from === 0){
        return (
            <ListItem key={key} id={key} ref={isLast ? lastRef : null}>
                <ListItemAvatar>
                    <Avatar>H</Avatar>
                </ListItemAvatar>
                <Grid container>
                    <Grid item xs={12}>
                        <ListItemText className={classes.messageForMe} align="left" primary={data.message}></ListItemText>
                    </Grid>
                    <Grid item xs={12} align="left">
                        {data.question && (
                            <RenderInput callback={(v) => onChoice(v) } type={data.responseType} disabled={typeof data.disabled === "undefined" ? false : data.disabled} options={data.options} />
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <ListItemText align="left" secondary={data.time}></ListItemText>
                    </Grid>
                </Grid>
            </ListItem>
        );
    }

    return (
        <ListItem key={key} style={{flexDirection: 'row-reverse'}} ref={isLast ? lastRef : null}>
            <ListItemAvatar style={{ display: 'flex',justifyContent: 'flex-end'}}>
                <Avatar className={classes.myAvatar}>ME</Avatar>
            </ListItemAvatar>
            <Grid container>
                <Grid item xs={12} align="right">
                    <ListItemText className={classes.messageFromMe} align="right" primary={data.message}></ListItemText>
                </Grid>
                <Grid item xs={12}>
                    <ListItemText align="right" secondary={data.time}></ListItemText>
                </Grid>
            </Grid>
        </ListItem>
    );
}

function RenderInput({type,options,callback,disabled}){
    const [value,setValue] = useState('');
    let res;
    switch(type){
        case 'select':
            res = <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                value={value}
                fullWidth
                onChange={(e) => {setValue(e.target.value); callback(value)}}
                label="Answer"
                disabled={disabled}
                >
                    <MenuItem value="">
                        <em>Choose</em>
                    </MenuItem>
                    {
                        options.map((option, index) => <MenuItem value={option.value}>{option.label}</MenuItem>)
                    }
                </Select>
            </FormControl>
            break;
        case 'affirm':
            res = <ButtonGroup variant="outlined" color="primary" aria-label="contained primary button group">
                {options.map((item, index) => <Button disabled={disabled} onClick={() => callback(item.value)}>{item.label}</Button>
                )}
            </ButtonGroup>
            break;
        case 'text':
            res = <FormControl fullWidth variant="outlined">
                <TextField disabled={disabled} label="Answer" variant="outlined" value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button disabled={disabled} color="primary" variant="contained" onClick={() => callback(value)}>Send</Button>
            </FormControl>
            break;
        default:
            return null;

    }

    return res;
}

export default Chat;