import React, { Component} from 'react';
import data from './data.json';
import './LeagueLead.css';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TableRow, TableCell, TableHead } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { Card, Grid } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const LeaderBoard = () => {
    return (
        <Card style={{marginTop: '5%'}}>
            <h1 align='center' style={{fontFamily: 'Varela Round', fontSize: 'medium', fontWeight: 'bold', direction: 'rtl'}}>ליגה ארצית</h1>
            <hr/> 
        <Grid container justify='center' >
            <Row style={{fontFamily: 'Varela Round', fontSize: 'small', fontWeight: 'bold', direction: 'rtl', width: '75%'}}>
                <Col>דירוג</Col>
                <Col>משתמש</Col>
                <Col>נקודות</Col>
            </Row>
        {data.slice(0, 20).map((item) => {
            return(
                    <Row className="align-items-center" style={{direction: 'rtl', width: '75%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{item.id}</h1></Col>
                        <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={item.username[1]}></img></Col>
                        <Col style={{direction: 'rtl', width: '5%'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.username[0]}</h1></Col>
                        <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.points}</h1></Col>
                    </Row>
            )
        }
        )
        }
        <Row style={{direction: 'rtl', width: '75%', marginBottom: '2%', height: '35px'}}> 
            <Col style={{direction: 'rtl'}}>...</Col>
            <Col style={{direction: 'rtl'}}>...</Col>
            <Col style={{direction: 'rtl', width: '5%'}}>...</Col>
            <Col style={{direction: 'rtl'}}>...</Col>
        </Row>
        <Row className="align-items-center" style={{direction: 'rtl', width: '75%', marginBottom: '2%', height: '35px'}}> 
            <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>34</h1></Col>
            <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={'https://media-exp1.licdn.com/dms/image/C4D03AQE99Na43RdV-A/profile-displayphoto-shrink_400_400/0/1594224052186?e=1625097600&v=beta&t=2JUdnrq6dmfNHfOPAdMF_waD0KaJV8hOgZvAjRJH0mA'}></img></Col>
            <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>אפרוחי בית זית</h1></Col>
            <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>93</h1></Col>
        </Row>
        <Row style={{direction: 'rtl', width: '75%', marginBottom: '2%', height: '35px'}}> 
            <Col style={{direction: 'rtl'}}>...</Col>
            <Col style={{direction: 'rtl'}}>...</Col>
            <Col style={{direction: 'rtl', width: '5%'}}>...</Col>
            <Col style={{direction: 'rtl'}}>...</Col>
        </Row>
        <Row className="align-items-center" style={{direction: 'rtl', width: '75%', marginBottom: '2%', height: '35px'}}> 
            <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{data[data.length-1].id}</h1></Col>
            <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={data[data.length-1].username[1]}></img></Col>
            <Col style={{direction: 'rtl', width: '5%'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{data[data.length-1].username[0]}</h1></Col>
            <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{data[data.length-1].points}</h1></Col>
        </Row>
        </Grid>
        </Card>
    )
}

export default LeaderBoard;