import React, { Component, useState} from 'react';
import data from './data.json';
import './LeagueLead.css';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TableRow, TableCell, TableHead } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { Card, Grid } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const LeaderBoard = ({Name}) => {
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
        
        {data.slice(0, 20).map((item, idx) => {
            return(
                <Row className="align-items-center" style={{direction: 'rtl', width: '75%', marginBottom: '2%', height: '35px'}}> 
                    <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{idx+1}</h1></Col>
                    <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={item.image}></img></Col>
                    <Col style={{direction: 'rtl', width: '5%'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.teamName}</h1></Col>
                    <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.points[item.points.length-1]}</h1></Col>
                </Row>
            )
            
        }
        )
        }
        {data.map((item, index) => {
            if(item.username===Name && index > 19 && index != data.length-1){
                return(
                    <Grid style={{width: '100%'}}>
                    <Row style={{direction: 'rtl', width: '75%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl'}}>...</Col>
                        <Col style={{direction: 'rtl'}}>...</Col>
                        <Col style={{direction: 'rtl', width: '5%'}}>...</Col>
                        <Col style={{direction: 'rtl'}}>...</Col>
                    </Row>
                    <Row className="align-items-center" style={{direction: 'rtl', width: '75%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{index+1}</h1></Col>
                        <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={item.image}></img></Col>
                        <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.teamName}</h1></Col>
                        <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.points[item.points.length-1]}</h1></Col>
                    </Row>
                    </Grid>
                )
            }
        })}
        {data.map((item, index) => {
            if(data.length >= 20 && item.username===data[data.length-1].username){
                return(
                <Grid style = {{width: '100%'}}>
                <Row style={{direction: 'rtl', width: '75%', marginBottom: '2%', height: '35px'}}> 
                    <Col style={{direction: 'rtl'}}>...</Col>
                    <Col style={{direction: 'rtl'}}>...</Col>
                    <Col style={{direction: 'rtl', width: '5%'}}>...</Col>
                    <Col style={{direction: 'rtl'}}>...</Col>
                </Row>
                <Row className="align-items-center" style={{direction: 'rtl', width: '75%', marginBottom: '2%', height: '35px'}}> 
                    <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{data.length}</h1></Col>
                    <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={data[data.length-1].image}></img></Col>
                    <Col style={{direction: 'rtl', width: '5%'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{data[data.length-1].teamName}</h1></Col>
                    <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{data[data.length-1].points[data[data.length-1].points.length-1]}</h1></Col>
                </Row>
                </Grid>  
            )
        }})}
        </Grid>
        </Card>
    )
}

export default LeaderBoard;