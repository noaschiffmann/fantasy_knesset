import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardMedia } from '@material-ui/core';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import data from '../important/data.json';
import './HakTable.css';

const useStyles = makeStyles(() => ({
    card: {
      borderRadius: 2,
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
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "center",
        height:"auto",
        width:"auto",
        borderRadius: 2,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
          },
        backgroundColor:"#ffffff",
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
            <h2 style={{ color: 'white', fontSize: 9 , direction: 'rtl'}}>{data[id].party} | {data[id].points[data[id].points.length-1]} נק'</h2>
          </Box>
        </Card>
        <box className={styles.data}>
        <h2 style={{color: 'black', fontSize: 11 , direction: 'rtl', textDecoration:'underline'}}> נתוני השבוע:</h2>
        <h2 style={{color: 'black', fontSize: 9 , direction: 'rtl'}}> נוכחות (ש"ש): 28 </h2>
        <h2 style={{color: 'black', fontSize: 9 , direction: 'rtl'}}> מגמת שינוי: +8 נק</h2>
        </box>
        </div>
        </div>
      </>
    );
  });

  export default HakTable;