import React, { Component} from 'react';
import './App.css';
import data from './data.json'
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TableRow, TableCell, TableHead } from '@material-ui/core';



const LeaderBoard = () => {
    const ourdata = () => {
        return(
            [
                {rank: 1, user: data[0].username,  points: data[0].points},
                {rank: 2, user: data[1].username,  points: data[1].points},
                {rank: 3, user: data[2].username,  points: data[2].points},
                {rank: 4, user: data[3].username,  points: data[3].points}
            ]
            
        );
    };
    
    const renderUser = (user, index) => {
        return(
            <tr key={index}>
                <td>{user.rank}</td>
                <td>{user.username}</td>
                <td>{user.points}</td>
            </tr>
        );
    };

    return(
            <Table style={{direction:'rtl'}}>
                <div style={{height:'40px'}}><TableHead>
                    <TableRow style={{width: '100%'}}>
                        <TableCell style={{fontWeight: 'bold', fontFamily:'Varela Round'}}>&nbsp;דירוג&nbsp;</TableCell>
                        <TableCell style={{fontWeight: 'bold', fontFamily:'Varela Round'}}>שחקן&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
                        <TableCell style={{fontWeight: 'bold', fontFamily:'Varela Round'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;נק'&nbsp;&nbsp;</TableCell>                      
                    </TableRow>
                </TableHead></div>
                <div style={{marginTop: '20px'}}><TableRow>
                    <TableCell style={{fontFamily: 'Varela Round'}}>&nbsp;&nbsp;1</TableCell>
                    <TableCell style={{fontFamily: 'Varela Round'}}>&nbsp;&nbsp;&nbsp;<img class="avatar" alt='photo' src={"https://media-exp1.licdn.com/dms/image/C5603AQEu2XN1lvnfvw/profile-displayphoto-shrink_400_400/0/1605026381784?e=1625702400&v=beta&t=CA39sGoTfXJOKzQN4R04fEG5NJcagKFyNVrBO8qXEBc"} style={{ borderRadius: "50%", height: 40, width: 40}}></img> רק_ביבי11!</TableCell>
                    <TableCell style={{fontFamily: 'Varela Round'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;117</TableCell>
                </TableRow></div>
                <div style={{marginTop: '90px'}}><TableRow>
                    <TableCell style={{fontFamily: 'Varela Round'}}>&nbsp;&nbsp;2</TableCell>
                    <TableCell style={{fontFamily: 'Varela Round'}}>&nbsp;&nbsp;&nbsp;<img class="avatar" alt='photo' src={"https://media-exp1.licdn.com/dms/image/C5603AQERIMa5FUCHfQ/profile-displayphoto-shrink_400_400/0/1605889108380?e=1625702400&v=beta&t=W7GGO3-cV-6u-jEZCX8CYGKqGQ7evW8vkuh4vz8Lu0c"} style={{ borderRadius: "50%", height: 40, width: 40}}></img> פוליטיק_לי_קורקט</TableCell>
                    <TableCell style={{fontFamily: 'Varela Round'}}>115</TableCell>
                </TableRow></div>
                <div style={{marginTop: '160px'}}><TableRow>
                    <TableCell style={{fontFamily: 'Varela Round'}}>&nbsp;&nbsp;3</TableCell>
                    <TableCell style={{fontFamily: 'Varela Round'}}>&nbsp;&nbsp;&nbsp;<img class="avatar" alt='photo' src={"https://scontent.fsdv2-1.fna.fbcdn.net/v/t31.18172-8/10494416_10152682986818308_3813905822186821206_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dsM7zX7YOFoAX-CM9SW&_nc_ht=scontent.fsdv2-1.fna&oh=79cda93ded9ec3f58a46a7b82fd8d62f&oe=60BAD545"} style={{ borderRadius: "50%", height: 40, width: 40}}></img> איסר_אל_ביתנו</TableCell>
                    <TableCell style={{fontFamily: 'Varela Round'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;114</TableCell>
                </TableRow></div>
                <div style={{marginTop: '230px', marginLeft: '100px'}}><TableRow>
                    <TableCell style={{fontFamily: 'Varela Round', fontWeight: 'bold'}}>&nbsp;&nbsp;...</TableCell>
                    <TableCell style={{fontFamily: 'Varela Round', fontWeight: 'bold'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
                    <TableCell style={{fontFamily: 'Varela Round', fontWeight: 'bold'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;</TableCell>
                </TableRow></div>
                <div style={{marginTop: '285px'}}><TableRow>
                    <TableCell  style={{fontFamily: 'Varela Round'}}>153</TableCell>
                    <TableCell style={{fontFamily: 'Varela Round'}}> <img class="avatar" alt='photo'  src={'https://media-exp1.licdn.com/dms/image/C4D03AQE99Na43RdV-A/profile-displayphoto-shrink_400_400/0/1594224052186?e=1625097600&v=beta&t=2JUdnrq6dmfNHfOPAdMF_waD0KaJV8hOgZvAjRJH0mA'} style={{ borderRadius: "50%", height: 40, width: 40}}></img> להב_המלךך555</TableCell>
                    <TableCell  style={{fontFamily: 'Varela Round'}}>&nbsp;&nbsp;&nbsp;&nbsp;104</TableCell>
                </TableRow></div>

                
                {/* {ourdata.map(renderUser)} */}
            </Table>
    );
}



export default LeaderBoard;

