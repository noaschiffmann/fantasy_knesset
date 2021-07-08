import { React, useState } from 'react';
import { Button, CssBaseline, TextField, Link, Grid, Box, Typography, makeStyles, Container } from '@material-ui/core';
import Logo from '../important/pictures/logo.png';
import current_user from '../important/current_user.json';
import SignUpForm from './SignUpForm';


function Copyright() {
  return (
    <Typography style={{fontFamily:"Varela Round"}} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Fantasy Knesset
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  function signIn(){
    const axios = require('axios');
    axios.get('https://fk-backend.herokuapp.com/login', {
      params: {
        'username': userName,
        'password': password
      }
    })
    .then((response) => {
      let data = response.data;
      if (!data['connected']){
        alert("סיסמא או שם משתמש שגוי")
        return;
      }
      else {
        current_user.user_name = data['username']
        props.onRegister()
      }
    })
    .catch((error) => {
      console.log(error)
    })

  }

  function handleNoAccount(){
    props.onRegister()
    props.moveToSignUp()
    props.changeBottomBar()
  }

  return (
    
    <Container component="main" maxWidth="xs">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
      </head>
      <CssBaseline />
      <div className={classes.paper}>
          <img alt="logo" src={Logo} style={{width:"70%", height:"70%"}}></img>
        <Typography component="h1" variant="h5" style={{fontFamily: "Varela Round"}}> 
          התחברות
        </Typography>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            style={{ direction: "rtl", fontFamily: "Varela Round" }}
            fullWidth
            id="username"
            label="שם משתמש"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e)=>setUserName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            style={{ direction: "rtl", fontFamily: "Varela Round" }}
            fullWidth
            name="password"
            label="סיסמה"
            type="password"
            id="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{fontFamily: "Varela Round"}}
            onClick={signIn}
          >
              התחבר
          </Button>
        
          <Grid container align="center">
            <Grid item xs>
              <Link style={{fontFamily:"Varela Round"}} href="#" variant="body2">
                שכחתי סיסמה 
              </Link>
            </Grid>
            <Grid item xs>
              <Link style={{fontFamily:"Varela Round"}} onClick={handleNoAccount} variant="body2">
                אין לי חשבון
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={1}>
        <Copyright />
      </Box>
    </Container>
  );
}