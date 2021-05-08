import React from 'react';
import bottom from './Pictures/bottom.png';


const BottomBar = () => {
    return (
        <table style = {{height:'139px', width: '100%', fontFamily: 'Varela Round' ,backgroundImage: `url(${bottom})`, cellSpacing: '15px'}}>
            <div style={{marginTop: '20px'}}>
                <tr style={{direction: 'ltr', color: 'white', fontSize: 'large'}}>
                <div style={{marginLeft: '100px'}}><td>מדיניות האתר</td>
                <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;צור קשר</td></div>
                </tr>
                &nbsp;&nbsp;&nbsp;
                <tr style={{direction: 'ltr', color: 'white', fontSize: 'large'}}>
                    <div style={{marginLeft: '100px', marginTop: '15px'}}><td>הגדרות</td></div>
                </tr>
            </div>
        </table>

    );
}

export default BottomBar;
