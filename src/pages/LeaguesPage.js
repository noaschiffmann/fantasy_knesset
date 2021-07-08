
import React from 'react';
import LeaderBoard from '../components/LeaderBoard/League';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
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
      paddingBottom: 20,
      alignSelf: "center",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 10px",
      marginLeft:20,
    }
  }));


const Leagues = () => {
    const styles = useStyles();
    return(
        <body alignitems="center" style={{backgroundColor: '#F7F7F7', width: "100%"}}>
            <div className={styles.box} align='center' width="100%" style={{flex:1, marginTop:20, marginBottom:20}}>
            <br></br>
            <h1 align='center' style={{marginBottom: 20, fontFamily: 'Varela Round', fontSize: 'medium', fontWeight: 'bold', direction: 'rtl'}}>ליגה ארצית</h1>
            <LeaderBoard Name={"להב רום"}/>
        </div>
        </body>
    )
}

export default Leagues;