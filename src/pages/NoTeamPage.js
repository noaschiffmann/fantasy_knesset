import React, { useEffect, useState } from "react";
import  Overlay  from 'react-overlay-component';
import { Button, makeStyles } from '@material-ui/core';
import SignUpForm from './SignUpForm';
import bottomBarHaks from '../important/pictures/bottomBarHaks.png';
import merav from '../important/pictures/merav.png';
import Tibi from '../important/pictures/Tibi.png';
import BibiGantz from '../important/pictures/BibiGantz.png';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height:"100%",
        width:"100%",
      },
      box: {
        borderRadius: 20,
        backgroundColor: "white",
        height:"100%",
        width:"90%",
        marginTop: 10,
        alignSelf: "center",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      },
    root: {
        width:'100%'
    },
    text: {
    direction:'rtl',
    fontFamily: 'Varela Round',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
     },
    img: {
        maxWidth: '28%',
        borderRadius: 12,
        margin:15,
    },
    bottomHaks: {
        maxWidth:"100%", 
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
        <div style={{width:'100%',backgroundColor:"#F7F7F7"}}>
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
            </head>
            <div className={classes.container}>
               <div className={classes.box}>
                        <img className={classes.img} alt="complex" src={merav} />
                        <div className={classes.text} style={{ marginRight: 15, marginLeft: 0}}>
                            <h1 style={{color:'black', fontSize:17}}>צור קבוצה</h1> 
                            צור קבוצה המורכבת מ-6 חברי כנסת וצבור נקודות עבור מעורבותם בכנסת ושירותם כנבחרי ציבור 
                        </div>
                    </div>
                    <div className={classes.box} style={{flexDirection: "row-reverse"}}>
                        <img className={classes.img} alt="complex" src={Tibi} />
                        <div className={classes.text} style={{ marginRight: 0, marginLeft: 15}}>
                        <h1 style={{color:'black', fontSize:17}}>התחרה בליגה הארצית</h1> 
                        התחרה מול חברים וכבוש את טבלאות המובילים
                        </div>
                    </div>
                    <div className={classes.box} style={{marginBottom:20}}>
                        <img className={classes.img} alt="complex" src={BibiGantz}/>
                        <div className={classes.text} style={{ marginRight: 15, marginLeft: 0}}>
                        <h1 style={{color:'black', fontSize:17}}>בצע החלפות</h1>
                        עקוב אחר ביצועי חברי הכנסת ואחת לשבועיים תוכל לעדכן את הקבוצה ולשמור על הרכב מנצח
                        </div>
                    </div>
            <Button style={{width:"90%", fontFamily: "Varela Round"}}
                onClick={()=>{setOverlay(true);}}
                variant="contained" color="secondary" size="large" align="center">להרשמה
            </Button>
            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <SignUpForm setUser={props.setUser} onRegister={()=>{setRegister(true)}}/>
                <Button
                    onClick={()=>{setOverlay(false);}} 
                    className="danger">
                </Button>
            </Overlay>
            <div align="center" style={{marginTop:15}}>
                <img alt="haks" className={classes.bottomHaks} src={bottomBarHaks}></img>
            </div>
        </div>
        </div>
    );
}

export default NoTeamPage;