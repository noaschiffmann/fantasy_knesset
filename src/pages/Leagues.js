import React from 'react';
import './Leagues.css';

const Leagues = () => {
    return(
        <div align='center'>
            <table align = 'center' style={{fontFamily: 'Varela Round', marginTop:'3%'}}>
                <tr align = 'center'>
                    <td style={{width: '50%'}}>
                        <button class='button' style={{backgroundColor: 'blue', color: 'white'}}>הצטרף לליגה</button>
                    </td>
                    <td style={{width: '50%'}}>
                        <button class='button' style={{backgroundColor: 'white', color: 'blue'}}>צור ליגה</button>
                    </td>
                </tr>
                
            </table> 
            <div align = 'center' style={{fontFamily: 'Varela Round', marginTop:'3%', fontSize: 'large', fontWeight: 'bold'}}>
                <tr >הליגות שלי</tr>
            </div>
            <table style={{fontFamily: 'Varela Round', marginTop:'3%', border: '1px solid gray', borderRadius: '15px', direction: 'rtl', borderColor: 'gray'}}>
                <tr style={{border: '1px solid gray', borderRadius: '15px', fontWeight:'bold'}}>
                    <td >שם הליגה</td>
                    <td >מיקום</td>
                </tr>
                <tr style={{border: '1px solid gray', borderRadius: '15px'}}>
                    <td >ליגה ארצית</td>
                    <td >574</td>
                </tr>
            </table>
            
        </div>
    )
}

export default Leagues;