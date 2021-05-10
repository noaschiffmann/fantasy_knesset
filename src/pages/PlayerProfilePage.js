import React, { useState } from "react";
import './PlayerProfilePage.css';
import 'tachyons';
import CountDownTimer from "../components/CountDownTimer";
import Avatar from '../components/AvatarBar/Avatar.js';
import Overlay from 'react-overlay-component';
import Button from '@material-ui/core/Button';
import data from '../important/data.json';
import Hak from '../components/Hak';
import HakProfilePage from './HakProfilePage';
import Chart from "../components/LeaderBoard/Chart";
import ProfileGraph from '../components/ProfileGraph';


const PlayerProfilePage = () => {
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);
    const configs = {
      animate: true,
    };
    const [id, setId] = useState(0);

    function myHaks(){
      return [data[0],data[1],data[2],data[3],data[4],data[5]]
    }

    function handleClick(id){
      setOverlay(true);
      setId(id);
    }
    return (
        <div>
          <body style={{backgroundColor: '#F7F7F7'}}>
            <Avatar />
            <div align='center'>
              {myHaks().map((item) => 
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
                  <div style={{marginLeft:'92px'}}>המובילים בארץ</div>
                  <div style={{marginRight: '100px'}}><Chart /></div>
                </td>
                <td style={{flex:1, cellSpacing:"0px", cellPadding:"0px", border:"0px", width: '50%'}}>
                  <div style={{marginTop:-70}}>הסטוריית הנקודות שלי</div>
                  <div style={{width: '650px'}}><ProfileGraph/> </div>
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
          </body>          
        </div>         
    );
  }
export default PlayerProfilePage;