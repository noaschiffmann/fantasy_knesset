/**
 * the national league component
 * presenting the top 20 users in terms of points
 */


import React from 'react';
import all_users from '../../important/all_users.json';
import { Row, Col } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import current_user from '../../important/current_user.json';


const League = (props) => {

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

    // move to the profile of this user
    function handleClick(username){
        props.setUser(username);
        props.toUser()
    }

    all_users.sort((a, b) => b.points.reduce((x,y)=>x+y) - a.points.reduce((x,y)=>x+y));

    return (
        <Grid container justify='center' >
            <Row style={{fontFamily: 'Varela Round', fontSize: 'small', fontWeight: 'bold', direction: 'rtl', width: '90%', marginBottom:10}}>
                <Col>דירוג</Col>
                <Col>משתמש</Col>
                <Col>נקודות</Col>
            </Row>
            
        {all_users.slice(0,20).map((item, index) => {
            if (item.username === current_user.user_name){
                return(
                    <Row className="align-items-center" style={{backgroundColor:'rgb(196, 222, 246)', direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: "rtl", marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{index+1}</h1></Col>
                        <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={picURL(item)}></img></Col>
                        <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.teamName}</h1></Col>
                        <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.points.reduce((x,y)=>x+y)}</h1></Col>
                    </Row>
                )
            }
            else{
                return(
                    <Row onClick={()=>handleClick(item.username)} className="align-items-center" style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: "rtl", marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{index+1}</h1></Col>
                        <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={picURL(item)}></img></Col>
                        <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.teamName}</h1></Col>
                        <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.points.reduce((x,y)=>x+y)}</h1></Col>
                    </Row>
                    )
            }
        })}
        {all_users.map((item, index) => {
            if(item.username === current_user.user_name && index > 19 && index !== all_users.length-1){
                return(
                    <Grid style={{width: '100%'}}>
                    <Row style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                        <Col style={{direction: 'rtl', marginLeft: "-5%"}}>...</Col>
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
        })}
        {all_users.map((item, index) => {
            if(all_users.length > 20 && item.username === all_users[all_users.length-1].username){
                if(item.username === current_user.user_name){
                    return(
                        <Grid style = {{width: '100%'}}>
                        <Row style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                            <Col style={{direction: 'rtl', marginLeft: "-5%"}}>...</Col>
                            <Col style={{direction: 'rtl'}}>...</Col>
                            <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}>...</Col>
                            <Col style={{direction: 'rtl'}}>...</Col>
                        </Row>
                        <Row className="align-items-center" style={{backgroundColor:'rgb(196, 222, 246)', direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                            <Col style={{direction: 'rtl', marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{all_users.length}</h1></Col>
                            <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={picURL(all_users[all_users.length-1])}></img></Col>
                            <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{all_users[all_users.length-1].teamName}</h1></Col>
                            <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{all_users[all_users.length-1].points.reduce((x,y)=>x+y)}</h1></Col>
                        </Row>
                        </Grid>  
                    )
                }
                else{
                    return(
                        <Grid style = {{width: '100%'}}>
                        <Row style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                            <Col style={{direction: 'rtl', marginLeft: "-5%"}}>...</Col>
                            <Col style={{direction: 'rtl'}}>...</Col>
                            <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}>...</Col>
                            <Col style={{direction: 'rtl'}}>...</Col>
                        </Row>
                        <Row className="align-items-center" style={{direction: 'rtl', width: '85%', marginBottom: '2%', height: '35px'}}> 
                            <Col style={{direction: 'rtl', marginLeft: "-5%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{all_users.length}</h1></Col>
                            <Col style={{direction: 'rtl'}}><img class="avatar" alt='pic' src={picURL(all_users[all_users.length-1])}></img></Col>
                            <Col style={{direction: 'rtl', width: '5%', marginRight: "-10%"}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{all_users[all_users.length-1].teamName}</h1></Col>
                            <Col style={{direction: 'rtl'}}><h1 style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{all_users[all_users.length-1].points.reduce((x,y)=>x+y)}</h1></Col>
                        </Row>
                        </Grid>  
                    )
                }
         }})}
        </Grid>
    )
}

export default League;