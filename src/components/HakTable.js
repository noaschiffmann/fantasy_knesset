import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardMedia } from '@material-ui/core';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import data from '../important/data.json';
import './HakTable.css';

const useStyles = makeStyles(() => ({
    card: {
      borderRadius: 8,
      textAlign: 'right',
      position: 'relative',
      height: 10,
      width: 5, 
      minWidth: 100,
      minHeight: 130,
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '60%',
        bottom: 0,
        zIndex: 1,
        background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
      },
    },
    content: {
      position: 'absolute',
      fontWeight: 300,
      zIndex: 2,
      bottom: 0,
      width: '100%',
      fontFamily: 'Varela Round',
    },
    root: {
        flexGrow: 1,
    },
    container: {
        backgroundColor: "#F7F7F7",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "center",
        height:"auto",
        width:"auto",
        borderRadius: 8,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
          },
    },
    data: {
        textAlign: 'right',
        fontFamily: 'Varela Round',
        margin: 8,
    },
    
  }));
  
const HakTable = React.memo(function GalaxyCard({id}) {
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top'});
    const styles = useStyles();

    function sumAttendWeek() {
      const temp = data[id].points.slice(data[id].points.length-5, data[id].points.length);
      let sum = 0;
      for (let num of temp){
        sum += num
      }
      return sum;
    }
    return (
      <>
    <div className={styles.root}>
      <div className={styles.container}>
        <Card className={styles.card}>
          <CardMedia
            classes={mediaStyles}
            image={data[id].image}
          />
          <Box px={1} className={styles.content}>
            <h1 style={{ color: 'white', fontSize: 11 }}>{data[id].name}</h1>
            <h2 style={{ color: 'white', fontSize: 9 , direction: 'rtl'}}>{data[id].party} | {data[id].points.reduce((x,y) => x + y)} נק'</h2>
          </Box>
        </Card>
        <box className={styles.data}>
        <h2 style={{color: 'black', fontSize: 11 , direction: 'rtl', textDecoration:'underline'}}> נתוני השבוע:</h2>
        <h2 style={{color: 'black', fontSize: 9 , direction: 'rtl'}}> נוכחות (ש"ש): {sumAttendWeek()} </h2>
        <h2 style={{color: 'black', fontSize: 9 , direction: 'rtl'}}> מספר שאילתות: {data[id].num_queries} </h2>
        <h2 style={{color: 'black', fontSize: 9 , direction: 'rtl'}}> מגמת שינוי: {data[id].points[data[id].points.length-1]-data[id].points[data[id].points.length-2]} נק</h2>
        </box>
        </div>
        </div>
      </>
    );
  });

  export default HakTable;