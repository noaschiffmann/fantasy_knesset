import React, { useState } from "react";
import PlayerProfilePage from "./PlayerProfilePage";
import HomeTab from "./HomeTab";
import LeaguesPage from "./LeaguesPage";
import KnessetWalkThroughPage from "./KnessetWalkthroughPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoTeamPage from "./NoTeamPage";
import { makeStyles, BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import topBarPic from '../important/topBarPic.png';
import Squad from './Squad';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import './Main.css';
import ChangeBar from '../components/ChangeBar.js';


const useStyles = makeStyles((theme) => ({
  bottomBar: {
    width: '100%',
    position: 'sticky',
    bottom: 0,
    zIndex: 1000,
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
  const classes = useStyles();
  const [page, setPage] = useState(5);
  const [value, setValue] = useState(3);
  
  function switchPage(page){
    // eslint-disable-next-line default-case
    switch(page){
      case(1):
        return <HomeTab />
      case(2):
        return <NoTeamPage onRegister = {()=>setPage(5)}/>
      case(3):
        return <LeaguesPage/>
      case(4):
        return <KnessetWalkThroughPage />
      case(5):
         return <Squad onAcceptTeam = {()=>setPage(6)} />
      case(6):
        return <PlayerProfilePage />
    }
}

    return (
        <div>
          <head>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
          </head> 

          <div className={classes.topBar} style={{ width:"100%", position:'top' }}>
            <img className={classes.img} alt="topBar" src={topBarPic}/>
          </div>

          <div style={{backgroundColor:"#F7F7F7"}}>
            <ChangeBar /> 

            {switchPage(page)}
          </div>
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {setValue(newValue);}}
              showLabels
              className={classes.bottomBar}
            >
              <BottomNavigationAction onClick={()=>setPage(4)} label="המליאה" icon={<AccountBalanceOutlinedIcon />} />
              <BottomNavigationAction onClick={()=>setPage(3)} label="ליגות" icon={<EmojiEventsOutlinedIcon />} />
              <BottomNavigationAction onClick={()=>setPage(2)} label="הקבוצה שלי" icon={<PersonPinIcon />} />
              <BottomNavigationAction onClick={()=>setPage(1)} label="דף הבית" icon={<HomeOutlinedIcon />} />
            </BottomNavigation>
        </div>

    );
  }
  
export default Main;
