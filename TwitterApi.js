import React from 'react';
import tweets from './python-twitter/tweets.json';
import './TwitterApi.css'

const TwitterApi = () => {
    return (
    <table className ='tc' style={{width: '40%'}}>
    <tr style={{border: '1px solid black', borderRadius: '15px', direction: 'rtl', width: '40%'}}>   
    {tweets.map((item) => {
        return(
            <td style={{border: '1px solid black', borderRadius: '15px', width:'20%', verticalAlign: 'top'}}>
                <tr>
                    <td><img class="avatar" alt='pic' src={item.img}></img></td>
                    <div  style={{marginTop: '10%'}}><td><div style={{fontFamily: 'Varela Round', fontWeight: 'bold'}}>{item.username}</div></td></div>
                </tr>
                <div style={{fontFamily: 'Varela Round'}}>{item.text}</div>
                <div style={{fontFamily: 'Varela Round', fontSize: 'small'}}>{item.hour}</div>
            </td> 
        )
        
    }
    )
    }
    </tr>
    </table>
    )
}

export default TwitterApi;