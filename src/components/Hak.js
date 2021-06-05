  
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import data from '../important/data.json';
import coin from './Pictures/our_gold_coin.png';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
    card: {
      borderRadius: 16,
      textAlign: 'right',
      transition: '0.2s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
      position: 'relative',
      height: 10,
      width: 5, 
      minWidth: 140,
      minHeight: 180,
      margin: 7,
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '64%',
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
  }));
  
  export const Hak = React.memo(function GalaxyCard({id, flag}) {
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top'});
    flag = false;
    const styles = useStyles();
    return (
      <>
        <NoSsr>
          <GoogleFontLoader
            fonts={[
              { font: 'Spartan', weights: [300] },
              { font: 'Montserrat', weights: [200, 400, 700] },
            ]}
          />
        </NoSsr>
        <Card className={styles.card}>
          <CardMedia
            classes={mediaStyles}
            image = {data[id].image}
          />
          {flag ? (
            <Avatar alt='coin' name = {data[id].coins} style={{height:'28px', width:'28px', backgroundImage: `url(${coin})`, backgroundSize: 'cover', backgroundPosition: 'center', 
                                                              color: '#181827', fontFamily: 'Varela Round', fontSize: 'small', fontWeight: 'bold'}}>{data[id].coins}</Avatar>) : 
            null }
          <Box pb={1} px={1} className={styles.content}>
            <h1 style={{ color: 'white', fontSize: 13 }}>{data[id].name}</h1>
            <h2 style={{ color: 'white', fontSize: 11 , direction: 'rtl'}}>{data[id].party} | {data[id].points[data[id].points.length-1]} נק'</h2>
          </Box>
        </Card>
      </>
    );
  });
  export default Hak;