import React, { Component } from "react";
import FantasyHeader from '../components/FantasyHeader';
import './PlayerProfilePage.css';
import HaakList from '../components/HaakList';
import { AllHaaks } from "../AllHaaks";
import 'tachyons';
import background from '../components/Pictures/Rectangle 65.png';
import CountDownTimer from "../components/CountDownTimer";
import Chart from '../components/chart/App';
import Avatar from '../components/AvatarBar/Avatar.js';



class PlayerProfilePage extends Component {
  constructor() {
    super()
    this.state= {
      AllHaaks:[]
    }
  }
  render() {
    return (
        <div>
          <FantasyHeader></FantasyHeader>
          <body style={{backgroundColor: 'white'}}>
          <Avatar />
            &nbsp;
            <div className='tc'>
              <HaakList AllHaaks = {AllHaaks}/>
            </div>
            &nbsp;
            &nbsp;
            <table style={{marginBottom: '70px' , border: '0'}}>
              <tr className= 'tc' style={{position:'absolute', fontWeight:'bold' ,color:'white', fontFamily: 'Varela Round', fontSize:34, height: '70px',width: '100%', backgroundImage: `url(${background})`}}>
                <div style={{marginTop: '15px'}}>:היסטוריית נקודות</div>
              </tr>
            </table>
            &nbsp;
            
            <div className= 'tc' style={{ width: '70%', marginTop: '15px', marginBottom: '40px', marginLeft: '220px'}}>
                <Chart />
            </div>
            
            <table>
              <tr className= 'tc' style={{height: '85px', width: '100%', backgroundImage: `url(${background})`}}>
                <div style={{marginTop: '30px'}}><CountDownTimer date='05/20/2021'/></div>
              </tr>
              
            </table>
            
          </body>
          &nbsp;
          &nbsp;
          
        </div>         
    );
  }
}
export default PlayerProfilePage;