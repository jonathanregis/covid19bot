import {useState} from 'react';
import './App.css';
import {AppBar, Toolbar, Typography, Button, Grid, TextField } from '@material-ui/core';
import ChatBot from './components/ChatBot';

const botName = "Kojo";
function App() {
  const [started, setStarted] = useState(false);
  const [userName, setUserName] = useState('');
  const start = () => {
    console.log(userName)
    setStarted(true);
  }
  const onChangeUsername = e => {
    setUserName(e.target.value);
  }

  const reset = () => {
    setStarted(false);
    setUserName('');
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'auto'}}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography style={{flexGrow:1}} variant="h6">
            Covid-19 Health bot
          </Typography>
          <Button color="inherit" onClick={reset}>Reset</Button>
        </Toolbar>
      </AppBar>
      <Grid style={{flexGrow: 1, alignItems: "center", backgroundColor: '#ddd', padding: 15}} container align="center" justify="center" direction="row">
        <Grid md={6} xs={12} item align="center" >
          {
            started && userName !== '' && (
              <ChatBot username={userName} botName={botName} />
            )
          }
          {
            !started && (
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="h3">
                    Please tell me your name so we can get started.
                  </Typography>
                  <TextField 
                    onChange={onChangeUsername} 
                    fullWidth id="username" 
                    label="Your name" 
                    variant="outlined" 
                  />
                </Grid>
                <Grid item>
                  <Button color="primary" variant="contained" onClick={start}>Let's go</Button>
                </Grid>
              </Grid>
            )
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
