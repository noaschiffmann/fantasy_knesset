import { React, useState } from 'react';
import { makeStyles, Card, CardActionArea, CardContent, Button, Typography } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import TimelineIcon from '@material-ui/icons/Timeline';
import { Line } from 'react-chartjs-2';
import Overlay from 'react-overlay-component';
import data from '../important/data.json';
import HakTable from '../components/HakTable';

const useStyles = makeStyles((theme)=> ({
  root: {
    maxWidth: "100%",
  },
  photo: {
    height: 175,
    width: 140,
    paddingLeft: 102.5,
  },
  logo: {
    height: 20,
    paddingRight: 8,
  },
  button: {
    marginInline: "15%"
  },
}));

function setLabels(){
  let labels = [];
  let points_array = data[0].points;
  const current_day = new Date();
  for (let i in points_array){
    let tmp = new Date()
    tmp.setDate(current_day.getDate() - (points_array.length - i)) 
    labels.push(tmp.toLocaleDateString())
  }
  return labels;
}

const HakProfile = ({id}) => {

  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);
  const configs = {
      animate: true,
  };
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
      </head>
      <CardActionArea>
        <div align="center">
          <HakTable id={id} />
        </div>
        <CardContent>
          <hr></hr>
          <Typography style={{fontFamily: 'Varela Round'}} gutterBottom variant="h6" component="h2" align="center">
            <img className={classes.logo} alt="logo" src={data[id].party_logo}/>
            :מפלגה
          </Typography>
          <Typography style={{fontFamily: 'Varela Round'}} variant="body2" color="textSecondary" component="p" align="right">
            {data[id].summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <Button 
          className={classes.button}
          variant="contained" color="primary"
          onClick={()=> window.open("https://m.knesset.gov.il/mk/Pages/MKPersonalDetails.aspx?MKID="+ data[id].url_id )}>
        <InfoOutlinedIcon />
      </Button>
    
      <Button    
          className={classes.button}
          variant="contained" color="primary"
          onClick={() => setOverlay(true)}>
        <TimelineIcon />
      </Button>
      
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <div style={{height: 120, width: "300px"}}>
          <Line
                data={{ labels: setLabels(),
                        datasets: [ {
                            label: "points",
                            fill: true,
                            lineTension: 0.5,
                            backgroundColor: '#144569',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: data[id].points
                          }]}}
                options={{
                  title:{
                    display:true,
                    text:'Points',
                    fontSize:20,
                    color: 'black'
                  },
                  legend:{
                    display: true,
                    position: "right"
                  }
                }}
              />
            </div>
            <Button
                onClick={()=> setOverlay(false)} 
                className="danger">
            </Button>
          </Overlay>
    </Card>
  );
}


export default HakProfile;