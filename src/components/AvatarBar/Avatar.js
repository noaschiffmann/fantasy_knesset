
import React from 'react';
import './Avatar.css';
import { makeStyles } from '@material-ui/core/styles';
import BG12 from '../../important/pictures/BG12.jpeg';
import all_users from '../../important/all_users.json';

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
    width:"100%",
    backgroundSize:"100%",
    backgroundPosition:"bottom left",
    },
}));

const Avatar = ({userName}) => {
  const styles = useStyles();

    const AWS = require('aws-sdk');
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
      region: 'eu-west-2'
      });
    let s3 = new AWS.S3({params: {Bucket: 'fantasy-knesset'}});
  
  
    function picURL(){
      var params = {Key: 'media/'+userName+'.jpg'};
      var url = s3.getSignedUrl('getObject', params);
      return url;
    }

  function myDetails(){
    let index=0
    for (let i in all_users){
      if (all_users[i].username === userName){
        index = i
        break;
      }
    }
    return {name: all_users[index].username, team: all_users[index].teamName, points: all_users[index].points.reduce((x,y)=>x+y)}
  }
    return (
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
            </head>
            <div className={styles.container} style={{ backgroundImage:`url(${BG12})`}}>
            <img class="avatar" alt='pic'
                src={picURL()} 
                style={{ flex:1, borderRadius: "50%", marginTop:18, height: 85, width: 85}}>
            </img> 
            <h1 style={{marginBottom: 1, marginTop: 4, fontSize: "medium", fontWeight:"bold", color: 'white', textAlign: "center"}}>{myDetails()['name']}</h1>
            <h1 style={{fontSize: 14,marginBottom: 100, marginTop: 4, direction:'ltr', color: 'white', textAlign: "center" }}> נקודות: {myDetails()['points']} | {myDetails()['team']} </h1>
            </div>
        </div>
    );
}

export default Avatar;