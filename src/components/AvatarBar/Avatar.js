
import React from 'react';
import './Avatar.css';
import { makeStyles } from '@material-ui/core/styles';
import BG12 from '../../important/pictures/BG12.jpeg';
import all_users from '../../important/all_users.json';
import current_user from '../../important/current_user.json';
import bell from '../../important/pictures/bell.jpeg';

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

const Avatar = () => {
  const styles = useStyles();

  function picURL(){
    // return ""
    // for (let i in all_users){
    //   if (all_users[i].username === current_user.user_name){

    //     return all_users[i].image
    //   }
    // }
  }

  function myDetails(){
    let index=0
    for (let i in all_users){
      if (all_users[i].username === current_user.user_name){
        index = i
        break;
      }
    }
    return {name: all_users[index].username, team: all_users[index].teamName, points: all_users[index].points}
  }
    return (
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
            </head>
            <div className={styles.container} style={{ backgroundImage:`url(${BG12})`}}>
            <img class="avatar" alt='pic'
                src={'https://www.petcare.com.au/wp-content/uploads/2017/09/c484a8db7d5d51aad53530f93689cece-poodles-toy-toy-poodle-puppies.jpg'} 
                style={{ flex:1, borderRadius: "50%", marginTop:18, height: 85, width: 85}}>
            </img> 
            <h1 style={{marginBottom: 1, marginTop: 4, fontSize: "medium", fontWeight:"bold", color: 'white', textAlign: "center"}}>{myDetails()['name']}</h1>
            <h1 style={{fontSize: 14,marginBottom: 100, marginTop: 4, direction:'ltr', color: 'white', textAlign: "center" }}> נקודות: {myDetails()['points']} | {myDetails()['team']} </h1>
            </div>
        </div>
    );
}

export default Avatar;