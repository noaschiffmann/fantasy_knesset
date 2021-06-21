import React from 'react';
import './Leagues.css';
import { Row, Col } from 'react-bootstrap';
import { Card, Grid } from '@material-ui/core';
import LeaderBoard from '../components/Leaderboard/Lead';

const Leagues = () => {
    return(
        <div align='center'>
            <table align = 'center' style={{fontFamily: 'Varela Round', marginTop:'3%'}}>
                <tr align = 'center'>
                    <td style={{width: '50%'}}>
                        <button class='button' style={{backgroundColor: 'blue', color: 'white'}}>הצטרף לליגה</button>
                    </td>
                    <td style={{width: '50%'}}>
                        <button class='button' style={{backgroundColor: 'white', color: 'blue'}}>צור ליגה</button>
                    </td>
                </tr>
                
            </table> 
            <LeaderBoard/>
        </div>
    )
}

export default Leagues;