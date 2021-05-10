import React, { useState } from "react";
import PlayerProfilePage from "./PlayerProfilePage";
import HomeTab from "./HomeTab";
import LeaguesPage from "./LeaguesPage";
import KnessetWalkThroughPage from "./KnessetWalkThroughPage";
import "./Main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoTeamPage from "./NoTeamPage";
import { Button, AppBar, Toolbar, makeStyles } from '@material-ui/core';
import topBarPic from '../important/topBarPic.png';
import bottom from '../important/bottom.png';
import Squad from './Squad';

const useStyles = makeStyles((theme) => ({
  tab: {
    marginLeft: 10,
    width: 133,
    fontFamily: "Varela Round",
    top:136,
    fontSize:18
  },
  bottomButtons: {
    fontFamily: "Varela Round",
    color: "#F7F7F7",
    marginRight: 15,
    width: 96,

  },

}));

const Main = () => {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  
  function switchPage(page){
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

          <div style={{ position:'static' }}>
            <AppBar color="#F7F7F7" style={{height:190, width:"100%", backgroundSize:'cover', backgroundImage: `url(${topBarPic})` }}>
              <Toolbar style={{ direction: "rtl" }}>
                <Button variant="contained" className={classes.tab} onClick={()=>setPage(1)}>דף הבית</Button>
                <Button variant="contained" className={classes.tab} onClick={()=>setPage(2)}>הקבוצה שלי</Button>
                <Button variant="contained" className={classes.tab} onClick={()=>setPage(3)}>ליגות</Button>
                <Button variant="contained" className={classes.tab} onClick={()=>setPage(4)}>המליאה</Button>
              </Toolbar>
            </AppBar>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
            {switchPage(page)}
            </div>
            <div style={{height:60, width:"100%",}}>
              <AppBar color="#F7F7F7" style={{ position:'static',  backgroundSize:'strech', backgroundImage: `url(${bottom})` }}>
                <Toolbar>
                  <Button size="small" className={classes.bottomButtons}>מדיניות האתר</Button>
                  <Button size="small" className={classes.bottomButtons}>צור קשר</Button>
                  <Button size="small" className={classes.bottomButtons}>הגדרות</Button>
                </Toolbar>
              </AppBar>
            </div>
        </div>

    );
  }
  
export default Main;
