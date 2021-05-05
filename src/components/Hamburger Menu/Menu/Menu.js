import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import SettingsIcon from '@material-ui/icons/Settings';
import { Icon } from '@material-ui/core';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div className= 'tr'>
      <img alt='lahav_pic'
              src={'https://media-exp1.licdn.com/dms/image/C4D03AQE99Na43RdV-A/profile-displayphoto-shrink_400_400/0/1594224052186?e=1625097600&v=beta&t=2JUdnrq6dmfNHfOPAdMF_waD0KaJV8hOgZvAjRJH0mA'} 
              style={{borderRadius: "50%", height: 50, width: 50}}>
      </img>
      </div>
      <table>
        <tr>
          &nbsp;
          <h2 className= 'tr' style={{ fontSize:18 ,color: 'black' ,fontWeight: 'bold' ,fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>KingLahav555
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:שם משתמש</h2>
        </tr>
        
        <tr>
          &nbsp;
          <h2 className= 'tr' style={{ fontSize:18 ,color: 'black' ,fontWeight: 'bold' ,fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>קבוצה:
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;רק ביבי</h2>
        </tr>
        <tr>
          &nbsp;
          <h2 className= 'tr' style={{ fontSize:18 ,color: 'black' ,fontWeight: 'bold' ,fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>kinglahav555@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:מייל</h2>
        </tr>
      </table>
      &nbsp;
      <a href="/">
        <span role="img" aria-label="user">⚙️</span>
        הגדרות
      </a>
      <a href="/">
        <span role="img" aria-label="user">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        פרטי משתמש
      </a>
      <a href="/">
        <span role="img" aria-label="league">🏆</span>
        הליגה שלי
        </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        צור קשר
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;