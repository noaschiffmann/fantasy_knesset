import React, { useEffect, useState } from "react";
import  Overlay  from 'react-overlay-component';
import { Button, makeStyles, Grid, Paper, Typography } from '@material-ui/core';
import SignUpForm from './SignUpForm';
import bottomBarHaks from '../important/bottomBarHaks.png';
import merav from '../important/merav.png';
import Tibi from '../important/Tibi.png';
import BibiGantz from '../important/BibiGantz.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%'
      },
      paper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        width:'100%'
      },
      img: {
        maxWidth: '80%',
        maxHeight: '90%',
      },
      bottomHaks: {
        // position: "sticky", 
        // bottom: 10,
        maxWidth:"100%", 
        // maxHeight:"70%"
      },

}));

const NoTeamPage = (props) => {
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);
    const configs = {
        animate: true,
    };
    const [register, setRegister] = useState(false);
    const classes = useStyles();

   useEffect(()=>{
    setOverlay(false);
   },[register]);

   useEffect(()=>{
    if(register){
        props.onRegister();
    }
   },[isOpen]);
    
    return (
        <div style={{width:'96%',margin:"2%", backgroundColor:"#F7F7F7"}}>
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
            </head>

            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <img className={classes.img} alt="complex" src={merav} />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography style={{direction:'rtl', fontFamily: 'Varela Round'}}>  
                            צור קבוצה המורכבת מ-6 חברי כנסת וצבור נקודות עבור הביצועים שלהם במציאות 
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <img className={classes.img} alt="complex" src={Tibi} />
                    </Grid>
                    <Grid item xs>
                        <Typography style={{direction:'rtl', fontFamily: 'Varela Round'}}>
                        הצטרף לליגות, התחרה עם חברים וזכה בפרסים
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <img className={classes.img} alt="complex" src={BibiGantz} />
                    </Grid>
                    <Grid item xs>
                        <Typography style={{direction:'rtl', fontFamily: 'Varela Round'}}>
                        עקוב אחרי חברי הכנסת המעניינים אותך וגלה עד כמה באמת הם עובדים עבורך
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Button style={{width:"100%", fontFamily: "Varela Round"}}
                onClick={()=>{setOverlay(true);}}
                variant="contained" color="secondary" size="large" align="center">להרשמה
            </Button>
            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <SignUpForm onRegister={()=>{setRegister(true)}}/>
                <Button
                    onClick={()=>{setOverlay(false);}} 
                    className="danger">
                </Button>
            </Overlay>
            <br></br>
            <br></br>
            <div align="center">
                <img alt="haks" className={classes.bottomHaks} src={bottomBarHaks}></img>
            </div>
        </div>
    );
}

export default NoTeamPage;