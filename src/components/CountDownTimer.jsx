/**
 * The timer in the profile page that counts down to when you can switch some Haks
 */


import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class CountDownTimer extends Component {
   state = {
     days: 0,
     hours: '00',
     minutes: '00',
     seconds: '00',
     timeUp: false
   }


componentDidMount() {
   setInterval(() => {
      let eventDate = + new Date(this.props.date);
      let difference = eventDate - new Date();
if (difference < 1) {
         this.setState({ timeUp: true });
      } else {
         let days = Math.floor(difference / (1000 * 60 * 60 * 24));
         let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
         let minutes = Math.floor((difference / (1000 * 60)) % 60);
         let seconds = Math.floor((difference / (1000)) % 60);
         this.setState({
            hours: hours > 9 ? hours : `0${hours}`,
            minutes: minutes > 9 ? minutes : `0${minutes}`,
            seconds: seconds > 9 ? seconds : `0${seconds}`,
            days
         });
      }
   }, 1000)
}
render() {
     const {days, hours, minutes, seconds, timeUp} = this.state;
     const dayString = days > 1 ? 'days' : 'day';
return (
        timeUp ?
        <div>
          <Button style={{width:"90%", fontFamily: "Varela Round"}}
                onClick={()=>{}}
                variant="contained" color="secondary" size="large" align="center">ערוך קבוצה
            </Button> <br></br><br></br></div>
          :
          <p style={{color: '#144569', fontFamily: 'Varela Round', fontSize:17 ,fontWeight: 'bold', background:"#c4def6", width:'100%'}}>
          { `${days} : ${hours} : ${minutes}  : ${seconds} ` } &nbsp; :זמן הנותר להחלפה
          </p>
     );
   }
}
export default CountDownTimer;