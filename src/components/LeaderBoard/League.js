import React from 'react';
import data from './data.json';
import { Row, Col } from 'react-bootstrap';
import { Grid } from '@material-ui/core';


const LeaderBoard = ({Name}) => {
    return (
        <Grid container justify='center' >
            <Row style={{fontFamily: 'Varela Round', fontSize: 'small', fontWeight: 'bold', direction: 'rtl', width: '90%', marginBottom:10}}>
                <Col>דירוג</Col>
                <Col>משתמש</Col>
                <Col>נקודות</Col>
            </Row>
        
        {data.slice(0, 20).map((item, idx) => {
            return(
                <Row className="align-items-center" style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                    <Col style={{direction: "rtl", marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{idx+1}</h1></Col>
                    <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={item.image}></img></Col>
                    <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.teamName}</h1></Col>
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
                    <Row style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl', marginLeft: "-5%"}}>...</Col>
                        <Col style={{direction: 'rtl'}}>...</Col>
                        <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}>...</Col>
                        <Col style={{direction: 'rtl'}}>...</Col>
                    </Row>
                    <Row className="align-items-center" style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl', marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{index+1}</h1></Col>
                        <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={item.image}></img></Col>
                        <Col style={{direction: 'rtl', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.teamName}</h1></Col>
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
                <Row style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                    <Col style={{direction: 'rtl', marginLeft: "-5%"}}>...</Col>
                    <Col style={{direction: 'rtl'}}>...</Col>
                    <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}>...</Col>
                    <Col style={{direction: 'rtl'}}>...</Col>
                </Row>
                <Row className="align-items-center" style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                    <Col style={{direction: 'rtl', marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{data.length}</h1></Col>
                    <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={'https://www.petcare.com.au/wp-content/uploads/2017/09/c484a8db7d5d51aad53530f93689cece-poodles-toy-toy-poodle-puppies.jpg'}></img></Col>
                    <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{data[data.length-1].teamName}</h1></Col>
                    <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{data[data.length-1].points[data[data.length-1].points.length-1]}</h1></Col>
                </Row>
                </Grid>  
            )
        }})}
        </Grid>
    )
}

export default LeaderBoard;