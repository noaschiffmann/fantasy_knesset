import React, { useState } from "react";
import 'tachyons';
import CountDownTimer from "../components/CountDownTimer";
import Avatar from '../components/AvatarBar/Avatar.js';
import Overlay from 'react-overlay-component';
import Button from '@material-ui/core/Button';
import data from '../important/data.json';
import Hak from '../components/Hak';
import HakProfilePage from './HakProfilePage';
import LeaderBoard from '../components/LeaderBoard/Lead.js';
import ProfileGraph from '../components/ProfileGraph';
import { makeStyles } from '@material-ui/core/styles';
import current_user from '../important/current_user.json';
import all_users from '../important/all_users.json';


const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
    width:"100%",
  },
  box: {
    borderRadius: 20,
    backgroundColor: "white",
    height:"100%",
    width:"90%",
    paddingBottom: 20,
    alignSelf: "center",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 10px",
  }
}));

const PlayerProfilePage = () => {
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);
    const configs = {
      animate: true,
    };
    const [id, setId] = useState(0);
    const styles = useStyles();

    function myHaks(){
      let team = []
      for (let i in all_users){
        if (all_users[i].username === current_user.user_name){
          team = all_users[i].team
          break;
        } 
      }
      let output = []
      for (let player in team){
        for (let i in data){
          if (data[i].url_id === team[player]){
            output.push(data[i].id)
          }
        }
    }
    return output;
    }

    function swapDate(){
      return "07/12/2021";
    }

    function handleClick(id){
      setOverlay(true);
      setId(id);
    }
    
    return (
          <body align="center" style={{backgroundColor: '#F7F7F7', width: "100%"}}>
            <Avatar />
            <div className={styles.container}>
            <div className={styles.box} align='center' width="100%" style={{flex:1, marginTop:-90}}>
              <br></br>
              {myHaks().map((item) => 
                <Button onClick={() => handleClick(item)} style={{flex:1, margin:2, maxWidth: "100px", maxHeight: '120px'}}>
                  <Hak id={item} />
                </Button>
                  )
                }
                <Overlay style={{margin:0}} configs={configs} isOpen={isOpen} closeOverlay={closeOverlay} rootClose={true}>
                  <HakProfilePage id={id}/>
                </Overlay>
            </div>
            <div className={styles.box} align='center' width="100%" style={{flex:1, marginTop:20}}>
            &nbsp;
                <div align='center' style={{fontFamily: 'Varela Round', fontSize: "medium", fontWeight:"bold", marginBottom:10}}>ליגה ארצית</div>
                <div style={{height:'100%',width: '95%', alignItems: "center"}}><LeaderBoard Name={"להב רום"}/></div>
            </div>
            <div className={styles.box} align='center' width="100%" style={{flex:1, marginTop:20}}>
            &nbsp;
                <div align='center' style={{fontFamily: 'Varela Round', fontSize: "medium", fontWeight:"bold", marginBottom:10}}>הסטוריית הנקודות שלי</div>
                <div align='center' style={{width: '95%'}}><ProfileGraph/> </div>
              </div>
              <br></br>
              <div align="center" style={{width:'100%'}}><CountDownTimer date={swapDate()}/></div>
          </div>
          </body>          
     
    );
  }

export default PlayerProfilePage;