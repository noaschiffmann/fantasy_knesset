import React from 'react';
import './Leagues.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import LeaderBoard from '../components/Leaderboard/LeagueLead.js';
import data from '../components/Leaderboard/data.json';

const Leagues = () => {
    return(
        <div align='center'>
            <Row align = 'center' style={{marginTop:'3%',direction: 'rtl', width:'100%'}}>
                    <Button variant="contained" color="primary" style={{backgroundColor: 'white', color: '#344FA1', fontFamily: 'Varela Round', fontWeight: 'bold', width:'120px', marginLeft: '5%', marginRight: '16%'}}>
                        צור ליגה
                    </Button>
                    <Button variant="contained" color="primary" style={{backgroundColor: '#344FA1', color: 'white', fontFamily: 'Varela Round', fontWeight: 'bold', width:'120px', borderSpacing: '5%'}}>
                        הצטרף לליגה
                    </Button>
            </Row>
            <LeaderBoard Name={"להב רום"}/>
        </div>
    )
}

export default Leagues;