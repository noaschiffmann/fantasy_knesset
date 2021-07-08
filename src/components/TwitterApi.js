import React from 'react';
import tweets from './tweets.json';
import './TwitterApi.css'
import { Row, Col } from 'react-bootstrap';
import { Grid} from '@material-ui/core';
import { Card, CardBody } from "reactstrap";

const TwitterApi = () => {

    return (
        <div style={{marginLeft: "2%"}}>
            {/* {tweets = load_tweets()} */}
        <Grid container align='center'>
        {tweets.map((item) => {
            return(
                <Card style={{ border: '1px solid gray', borderRadius: '15px', width:'30%', direction: 'rtl', marginLeft: "2%"}}>
                        <CardBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div style={{width: "100%", marginTop: "-10%"}}>
                            <Row> 
                            <Col align='center'>
                                <img  class="avatar" alt='pic' src={item.img}></img>
                                <div style={{color:'black', fontFamily: 'Varela Round', fontSize: 'xx-small', fontWeight: 'bold'}}>{item.username}</div>
                            </Col>
                            </Row>
                        </div>
                        <div>
                            <Row align='center'>
                                <div style={{color:'black', width: "100%", fontFamily: 'Varela Round', fontSize: 'x-small', paddingTop: "5%"}}>{item.text}</div>
                            </Row>
                        </div>
                        </CardBody>
                        <div>
                            <div align='center' style={{color:'black', height: 30, fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{item.hour}</div>
                        </div>
                </Card> 
             )
            }
        )
        }
        </Grid>
        </div>
    )
}

export default TwitterApi;