import { React, useState } from 'react';
import { Button, CssBaseline, TextField, Box, Typography, makeStyles } from '@material-ui/core';
import Logo from '../important/pictures/logo.png';
import ImageUpload from 'image-upload-react'
import current_user from '../important/current_user.json';
import all_users from '../important/all_users.json';
import './SignUpForm.css';


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
    width: '100%',
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
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
    width:"100%",
  },
}));

export default function SignIn(props) {

  const [imageSrc, setImageSrc] = useState();
  const [imageUpload, setImageUpload] = useState();
 
  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
    setImageUpload(e.target.files[0])
  }

  const classes = useStyles();

  function signUp(){
    let uploadData = new FormData()
    uploadData.append('image', imageUpload, userName+'.jpg')

    const axios = require('axios');
    axios.get('https://fk-backend.herokuapp.com/registration', {
      params: {
                'username': userName, 
                'email': email, 
                'password': password, 
                'teamName': teamName, 
              }
    })
      .then((response) => {
        let data = response.data;
        if (data['accepted']){
          current_user.user_name = data['userName']
          axios.post('https://fk-backend.herokuapp.com/uploadImage', uploadData, {
            headers: {
              'content-type': 'multipart/form-data'
            }
          })
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
            alert("יש בעית תקשורת, נסה להתחבר מאוחר יותר")
          })
          axios.get('https://fk-backend.herokuapp.com/getUsersData')
            .then((response) => {
              for (let i in response.data){
                all_users[i] = response.data[i]
              }
            })
            .catch((error) => {
              console.log(error);
              alert("יש בעית תקשורת, נסה להתחבר מאוחר יותר");
            })
          props.onRegister()
        }
        else{
          alert(data['errMsg']);
          return;
        }
      })
      .catch((error) => {
        console.log(error);
      }) 
  }

  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [teamName, setTeamName] = useState();

  return (
    <div className={classes.container}>
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
    </head>
    <CssBaseline />
    <div className={classes.paper}>
        <img alt="logo" src={Logo} style={{width:"70%", height:"70%"}}></img>
      <Typography component="h1" variant="h5" style={{fontFamily: "Varela Round"}}> 
        יצירת פרופיל
      </Typography>

      <form method="Post" className={classes.form} noValidate>
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
          onChange={(e)=>setEmail(e.target.value)}
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
        <TextField 
          variant="outlined"
          margin="normal"
          required
          style={{ direction: "rtl", fontFamily: "Varela Round" }}
          fullWidth
          name="userName"
          label="שם משתמש"
          id="userName"
          onChange={(e)=>setUserName(e.target.value)}
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
          onChange={(e)=>setTeamName(e.target.value)}
        />
        <div className={classes.container} style={{flexDirection: 'row'}}>
        <div align='center' class='create-book-photo-picker _FCdzt' style={{width: "50%", height: 100}} >
          <ImageUpload 
            handleImageSelect={handleImageSelect}
            imageSrc={imageSrc}
            setImageSrc={setImageSrc}
            style={{
              width: '73%',
              height: 40,
              fontFamily: 'Varela Round',
              borderRadius:'100%'
            }}
        />
        </div>
        </div>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          style={{fontFamily: "Varela Round"}}
          onClick={signUp}
        >
            צור פרופיל
        </Button>
      
      </form>
    </div>
    <Box mt={1}>
      <Copyright />
    </Box>
  </div>
);
}