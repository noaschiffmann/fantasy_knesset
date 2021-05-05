import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

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
      margin: 8,
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
    },
  }));
  
  export const Haak = React.memo(function GalaxyCard({id,name,party,points,image}) {
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top'});
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
            image={image}
          />
          <Box pb={1} px={1} className={styles.content}>
            <h1 style={{ color: 'white', fontSize: 13 }}>{name}</h1>
            <h2 style={{ color: 'white', fontSize: 11}}>{party} | {points}</h2>
          </Box>
        </Card>
      </>
    );
  });
  export default Haak
