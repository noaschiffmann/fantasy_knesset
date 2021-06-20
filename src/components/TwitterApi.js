import React from 'react';
import tweets from './PythonTwitter/tweets.json';
import './TwitterApi.css';
import { Row, Col } from 'react-bootstrap';
import { Card, Grid } from '@material-ui/core';

const TwitterApi = () => {
    return (
        <div style={{marginTop: '1%'}}>
        <Grid container justify='center'>
        {tweets.map((item) => {
            return(
                <Card style={{border: '1px solid gray', borderRadius: '15px', width:'30%', verticalAlign: 'top', direction: 'rtl'}}>
                    <Row> 
                        <img class="avatar" alt='pic' src={item.img}></img>
                        <div style={{fontFamily: 'Varela Round', fontSize: 'xx-small', fontWeight: 'bold'}}>{item.username}</div>
                    </Row>
                    <div style={{fontFamily: 'Varela Round', fontSize: 'x-small'}}>{item.text}</div>
                    <div style={{fontFamily: 'Varela Round', fontSize: 'x-small', fontWeight: 'bold'}}>{item.hour}</div>
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