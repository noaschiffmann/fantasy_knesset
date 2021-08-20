/**
 * the main Hak component.
 */   


import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles, NoSsr, Card, Box, CardMedia } from '@material-ui/core';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import data from '../important/data.json';


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
      minWidth: 100,
      minHeight: 120,
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
    button: {
      zIndex: 1000
    },
  }));
  
  export const Hak = React.memo(function GalaxyCard({id}) {
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
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
          <Box pb={1} px={1} className={styles.content}>
            <h1 class="name" style={{ color: 'white', fontSize: 10 }}>{data[id].name}</h1>
            <h2 class="party" style={{ color: 'white', fontSize: 7, direction: 'rtl'}}>{data[id].party} | {data[id].points.reduce((x,y) => x + y)} נק'</h2>
          </Box>
        </Card>
      </>
    );
  });

  export default Hak;
