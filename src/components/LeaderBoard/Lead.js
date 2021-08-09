import React from 'react';
import './Lead.css';
import { Row, Col } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import current_user from '../../important/current_user.json';
import all_users from '../../important/all_users.json';


const LeaderBoard = () => {

    all_users.sort((a, b) => b.points.reduce((x,y)=>x+y) - a.points.reduce((x,y)=>x+y));
    
    const AWS = require('aws-sdk');
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
      region: 'eu-west-2'
      });
    let s3 = new AWS.S3({params: {Bucket: 'fantasy-knesset'}});
  
    function picURL(user){
      var params = {Key: 'media/'+user.username+'.jpg'};
      var url = s3.getSignedUrl('getObject', params);
      return url;
    }

    return (
        <Grid container justify='center' >
            <Row style={{fontFamily: 'Varela Round', fontSize: 'small', fontWeight: 'bold', direction: 'rtl', width: '90%', marginBottom: 10}}>
                <Col>דירוג</Col>
                <Col>משתמש</Col>
                <Col>נקודות</Col>
            </Row>
        {all_users.slice(0, 3).map((item, idx) => {
            if (item.username === current_user.user_name){
                return(
                    <Row className="align-items-center" style={{backgroundColor:'rgb(196, 222, 246)', direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl', marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{idx+1}</h1></Col>
                        <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={picURL(item)}></img></Col>
                        <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.teamName}</h1></Col>
                        <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.points.reduce((x,y)=>x+y)}</h1></Col>
                    </Row>
            )

            }
            else{
                return(
                        <Row className="align-items-center" style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                            <Col style={{direction: 'rtl', marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{idx+1}</h1></Col>
                            <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={picURL(item)}></img></Col>
                            <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.teamName}</h1></Col>
                            <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.points.reduce((x,y)=>x+y)}</h1></Col>
                        </Row>
                )
            }
        }
        )
        }
        {all_users.map((item, index) => {
            if(item.username === current_user.user_name && index >= 3){
                return(
                    <Grid style={{width: '100%'}}>
                    <Row style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl',marginLeft: "-5%"}}>...</Col>
                        <Col style={{direction: 'rtl'}}>...</Col>
                        <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}>...</Col>
                        <Col style={{direction: 'rtl'}}>...</Col>
                    </Row>
                    <Row className="align-items-center" style={{backgroundColor:'rgb(196, 222, 246)', direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl', marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{index+1}</h1></Col>
                        <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={picURL(item)}></img></Col>
                        <Col style={{direction: 'rtl', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.teamName}</h1></Col>
                        <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.points.reduce((x,y)=>x+y)}</h1></Col>
                    </Row>
                    </Grid>
                )
            }
            if(index >= all_users.length-1){
                return(
                    <Grid style={{width: '100%'}}>
                    <Row style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl',marginLeft: "-5%"}}>...</Col>
                        <Col style={{direction: 'rtl'}}>...</Col>
                        <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}>...</Col>
                        <Col style={{direction: 'rtl'}}>...</Col>
                    </Row>
                    <Row className="align-items-center" style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl', marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{index+1}</h1></Col>
                        <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={picURL(item)}></img></Col>
                        <Col style={{direction: 'rtl', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.teamName}</h1></Col>
                        <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.points.reduce((x,y)=>x+y)}</h1></Col>
                    </Row>
                    </Grid>
                )
            }
        })}
        </Grid>
    )
}

export default LeaderBoard;