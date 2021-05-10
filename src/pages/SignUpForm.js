import {React} from 'react';
import { Button, CssBaseline, TextField, Link, Grid, Box, Typography, makeStyles, Container } from '@material-ui/core';
import Logo from '../important/logo.png';
import { Route, NavLink } from 'react-router-dom';
import Squad from './Squad';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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

  return (
    
    <Container component="main" maxWidth="xs">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
      </head>
      <CssBaseline />
      <div className={classes.paper}>
          <img alt="logo" src={Logo} style={{width:200, height:200}}></img>
        <Typography component="h1" variant="h5" style={{fontFamily: "Varela Round"}}> 
          יצירת פרופיל
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            style={{ direction: "rtl", fontFamily: "Varela Round"}}
            fullWidth
            id="email"
            label="דוא”ל"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            style={{ direction: "rtl", fontFamily: "Varela Round" }}
            fullWidth
            id="email"
            label="שם משתמש"
            name="username"
            autoComplete="userName"
            autoFocus
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
          />
          <TextField 
            variant="outlined"
            margin="normal"
            required
            style={{ direction: "rtl", fontFamily: "Varela Round" }}
            fullWidth
            name="teamName"
            label="שם הקבוצה"
            id="teamName"
          />
          
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{fontFamily: "Varela Round"}}
            onClick={props.onRegister}
          >
              צור פרופיל
          </Button>
        
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                שכחתי סיסמה 
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