import React, { Component, useState } from "react";
import FantasyHeader from '../components/FantasyHeader';
import './PlayerProfilePage.css';
import HaakList from '../components/HaakList';
import { AllHaaks } from "../AllHaaks";
import 'tachyons';
import background from '../components/Pictures/Rectangle 65.png';
import CountDownTimer from "../components/CountDownTimer";
import Chart from '../components/chart/Chart.js';
import Avatar from '../components/AvatarBar/Avatar.js';
import Overlay from 'react-overlay-component';
import Button from '@material-ui/core/Button';
import data from './Data/data.json';
import Hak from '../components/Hak';
import HakProfilePage from './HakkProfilePage';
import Table from '../components/Leaderboard/Table.js';
import LeaderBoard from "../components/Leaderboard/App";
import BottomBar from '../components/BottomBar.js';



const PlayerProfilePage = () => {
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);
    const configs = {
      animate: true,
    };
    const [id, setId] = useState(0);

    function handleClick(id){
      setOverlay(true);
      setId(id);
    }
    return (
        <div>
          <FantasyHeader></FantasyHeader>
          <body style={{backgroundColor: 'white'}}>
            <Avatar />
            <div align='center' style={{direction: 'rtl'}}>
              {data.map((item) => 
                <Button onClick={() => handleClick(item.id)} style={{flex:1, marginRight: '20px', maxWidth: "140px", maxHeight: '180px'}}>
                  <Hak id={item.id} flag={false} />
                </Button>
                  )
                }
                <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                  <HakProfilePage id={id} />
                </Overlay>
            </div>
            &nbsp;
            <hr>
            </hr>
            <table align='center' style={{border: '0', width:'100%'}}>
              <tr align='center' style={{width: '100%',height: '100%', direction:'rtl', fontWeight:'bold' ,color:'black', fontFamily: 'Varela Round', fontSize:26}}>
                <td style={{flex:1, cellSpacing:"0px", cellPadding:"0px", border:"0px", width: '50%'}}>
                  <div style={{marginLeft:'160px'}}>ליגה ארצית:</div>
                  <div style={{marginRight: '100px'}}><LeaderBoard /></div>
                </td>
                <td style={{flex:1, cellSpacing:"0px", cellPadding:"0px", border:"0px", width: '50%'}}>
                  <div>היסטוריית נקודות:</div>
                  <div style={{width: '650px'}}><Chart /></div>
                </td>
              </tr>
            </table>
            &nbsp;
            <hr style={{marginTop: '460px'}}></hr>
            <table style={{ width:'100%', height: '85px'}}>
              <tr className= 'tc' style={{width: '100%'}}>
                <div style={{marginTop: '22px'}}><CountDownTimer date='05/20/2021'/></div>
              </tr>
            </table>
            <BottomBar />
          </body>          
        </div>         
    );
  }
export default PlayerProfilePage;