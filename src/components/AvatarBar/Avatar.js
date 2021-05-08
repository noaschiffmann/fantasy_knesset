import React from 'react';
import './Avatar.css';
import background from '../Pictures/Rectangle 65.png';

const Avatar = () => {
    return (
        <div >
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
            </head>
            <table style={{flex:1, cellSpacing:"0px", cellPadding:"0px", border:"0px", position:'absolute'}}>
              <tr className='tc' style={{position:'absolute',backgroundImage: `url(${background})`, marginTop:'40px' ,height: '80px', direction: 'rtl', cellSpacing:"0px", cellPadding:"0px", border:"0px"}}>
                <td style={{marginRight: '215px', position:'absolute', marginTop: '18px', cellSpacing:"0px", cellPadding:"0px", border:"0px"}}>
                  <h1 style={{fontSize: 28, color: 'white', fontWeight: 'bold'}}>
                        להב_המלךך555 
                  </h1>
                </td>
                <td style={{flex:1,marginRight: '600px', position:'absolute', marginTop: '15px', cellSpacing:"0px", cellPadding:"0px", border:"0px"}}>
                  <h1 style={{fontSize: 32, color: 'white', fontWeight: 'bold'}}>
                  🐣 אפרוחי בית זית 🐣  
                  </h1>
                </td>
                <td style={{flex:1,marginRight: '1350px', position:'absolute', marginTop: '18px', cellSpacing:"0px", cellPadding:"0px", border:"0px"}}>
                  <h1 style={{fontSize: 28, color: 'white', fontWeight: 'bold'}}>
                        נק': 104 &nbsp;
                  </h1>
                </td>
              </tr>
            </table>
            <div className='tr' class='overlap'>
            <img class="avatar" alt='lahav_pic'
                src={'https://media-exp1.licdn.com/dms/image/C4D03AQE99Na43RdV-A/profile-displayphoto-shrink_400_400/0/1594224052186?e=1625097600&v=beta&t=2JUdnrq6dmfNHfOPAdMF_waD0KaJV8hOgZvAjRJH0mA'} 
                style={{ flex:1, borderRadius: "50%", height: 170, width: 170, marginLeft: '1325px'}}>
            </img> 
            </div>
        </div>
    );
}

export default Avatar;