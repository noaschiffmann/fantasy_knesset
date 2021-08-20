/**
 * this is the main page of the app. from here we rendering all the other pages.
 * actually, our app has only 1 page (this page) where we render the top and bottom bar and in the middle we render the page you selected
 */


import React, { useEffect, useState } from "react";
import PlayerProfilePage from "./PlayerProfilePage";
import HomeTab from "./HomeTab";
import LeaguesPage from "./LeaguesPage";
import KnessetWalkThroughPage from "./KnessetWalkthroughPage";
import NoTeamPage from "./NoTeamPage";
import { makeStyles, BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import topBarPic from '../important/pictures/topBarPic.png';
import Squad from './Squad';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import './Main.css';
import ChangeBar from '../components/ChangeBar.js';
import data from '../important/data.json';
import LogIn from './LogIn';
import LoadingPage from '../components/LoadingPage';
import current_user from '../important/current_user.json';
import all_users from '../important/all_users.json';
import tweets from '../components/tweets.json';
import UserProfilePage from './UserProfilePage';


const useStyles = makeStyles((theme) => ({
  bottomBar: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 900,
    backgroundColor: "#144569",
  },
  topBar: {
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  img: {
    width: '100%',
    height: 56
  }
}));


const Main = () => {
  
  /**
   * First thing you do when uploading the app, we extract the most updated data about our Haks, tweets and users.
   */
  useEffect(() => {
    const axios = require('axios');
    axios.get('https://fk-backend.herokuapp.com/getTweets')
        .then((response) => {
          for (let i in response.data){
            tweets.push(response.data[i])
          }
          console.log(tweets)
        })
        .catch((error) => {
            console.log(error);
            alert("יש בעית תקשורת, נסה להתחבר מאוחר יותר");
        })
    axios.get('https://fk-backend.herokuapp.com/getDataHaks')
    .then((response) => {
        let update_data = response.data;
        for (let points_key in update_data['points']){
            for (let cur_key in data){
            if (data[cur_key].url_id === points_key){
                data[cur_key].points = update_data['points'][points_key];
                break;
              }
            }
        }
        for (let queries_key in update_data['queries']){
            for (let cur_key in data){
            if (data[cur_key].url_id === queries_key){
                data[cur_key].num_queries = update_data['queries'][queries_key];
                break;
              }
            }            
        }
        })
        .catch(function(error){
        console.log(error);
        alert("יש בעית תקשורת, נסה להתחבר מאוחר יותר");
        })
    axios.get('https://fk-backend.herokuapp.com/getUsersData')
    .then((response) => {
        for (let i in response.data){
          all_users.push(response.data[i])
        }
        setLoaded(true);
    })
    .catch((error) => {
        console.log(error);
        alert("יש בעית תקשורת, נסה להתחבר מאוחר יותר");
    })
  },[]);
  
  const [loaded, setLoaded] = useState(false);

  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(3);
  const [seeUser, setSeeUser] = useState("");
  
  /**
   * each click on the bottom bar calls this function that renders the asked page
   * @param page is the index number representing to which page we should move 
   * @returns the page we want to move to, the React component to render.
   */
  function switchPage(page){
    // eslint-disable-next-line default-case
    switch(page){
      case(1):  // move to the home tab
        return <HomeTab changeBottomBar={()=>setValue(0)} toMeliaa={()=>setPage(4)} />
      case(2):  // if not connected, move to the NoTeamPage, else move to the user's profile page
        for (let i in all_users){
          if (all_users[i].username === current_user.user_name){
            if (all_users[i].team.length !== 0){
              setPage(6);
            }
          }
        }
        return <NoTeamPage onRegister={()=>setPage(5)}/>
      case(3):  // move to League's page
        return <LeaguesPage setUser={setSeeUser} toUser={()=>setPage(7)} />
      case(4):  // move to Meliaa's page
        return <KnessetWalkThroughPage />
      case(5):  // move to build my team page
         return <Squad onAcceptTeam={()=>setPage(6)} />
      case(6):  // move to the user's profile page
        return <PlayerProfilePage />
      case(7):  // move to the user clicked on profile page
        return <UserProfilePage userName={seeUser} />
    }
}
    return (
      loaded ?  // if the data from the backend has loaded, render the page
        <div>
          <head>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
          </head> 

          <div className={classes.topBar} style={{ width:"100%", position:'top' }}>
            <img className={classes.img} alt="topBar" src={topBarPic} />
            <LogIn changeBottomBar={()=>setValue(2)} moveToSignUp={()=>setPage(2)} />
          </div>
          <div style={{marginTop: "2.8%", backgroundColor:"#F7F7F7"}}>
            <ChangeBar />
            {switchPage(page)}
            
          </div>
          <br></br>
          <br></br>
          <br></br>
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {setValue(newValue);}}
              showLabels
              className={classes.bottomBar}
            >
              <BottomNavigationAction onClick={()=>setPage(4)} label="המליאה" icon={<AccountBalanceOutlinedIcon />} />
              <BottomNavigationAction onClick={()=>setPage(3)} label="הליגה" icon={<EmojiEventsOutlinedIcon />} />
              <BottomNavigationAction onClick={()=>setPage(2)} label="הקבוצה שלי" icon={<PersonPinIcon />} />
              <BottomNavigationAction onClick={()=>setPage(1)} label="דף הבית" icon={<HomeOutlinedIcon />} />
            </BottomNavigation>
        </div>
        :  // if still loading, render the loading page
        <div align="center" style={{marginTop:'35%'}}>
          <LoadingPage />
        </div>
    );
  }
  
export default Main;
