import React from 'react';
import './Avatar.css';
import background from '../Pictures/Rectangle 65.png';

const Avatar = () => {
    return (
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
            </head>
            <table style={{flex:1, marginTop:-55, cellSpacing:"0px", cellPadding:"0px", border:"0px", position:'absolute'}}>
              <tr className='tc' style={{position: 'absolute', backgroundImage: `url(${background})`, marginLeft:-80, height: '60px', direction: 'rtl',  cellSpacing:"0px", cellPadding:"0px", border:"0px"}}>
                <td style={{marginRight: '135px', position:'absolute', marginTop: '18px', cellSpacing:"0px", cellPadding:"0px", border:"0px"}}>
                  <h1 style={{fontSize: 25, color: 'white', marginTop:-7, }}>
                        להב_המלךך555 
                  </h1>
                </td>
                <td style={{flex:1,marginRight: '480px', position:'absolute', marginTop: '15px', cellSpacing:"0px", cellPadding:"0px", border:"0px"}}>
                  <h1 style={{fontSize: 30, color: 'white', marginTop:-7, }}>
                  🐣 אפרוחי בית זית 🐣  
                  </h1>
                </td>
                <td style={{flex:1, marginRight: '1110px', position:'absolute', marginTop: '18px', cellSpacing:"0px", cellPadding:"0px", border:"0px"}}>
                  <h1 style={{fontSize: 25, color: 'white', marginTop:-7}}>
                        נק': 104 &nbsp;
                  </h1>
                </td>
              </tr>
            </table>
            <div className='tr' class='overlap'>
            <img class="avatar" alt='lahav_pic'
                src={'https://media-exp1.licdn.com/dms/image/C4D03AQE99Na43RdV-A/profile-displayphoto-shrink_400_400/0/1594224052186?e=1625097600&v=beta&t=2JUdnrq6dmfNHfOPAdMF_waD0KaJV8hOgZvAjRJH0mA'} 
                style={{ flex:1, borderRadius: "50%", marginTop:-80, height: 110, width: 110, marginLeft: '1050px'}}>
            </img> 
            </div>
        </div>
    );
}

export default Avatar;