import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Fab from '@material-ui/core/Fab';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import data from '../important/data.json';

// import { I18nManager } from 'react-native';

const useStyles = makeStyles((theme)=> ({
  root: {
    maxWidth: 345,
  },
  infoIcon: {
    marginRight: theme.spacing(1),
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
  cancel: {
    position:"absolute", 
    color: "#a5a5a5",
    right:-15,
  },
}));

function HakStatus(isUp){
  switch(isUp){
    case true: return (<div>&#128314;</div>);
    case false: return (<div>🔻</div>);
  }
};

export default function HakProfile({id=1}) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img className={classes.photo} alt={data[id].name} src={data[id].image}/>
        <Button className={classes.cancel}><CancelOutlinedIcon /></Button>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center" style={{fontWeight: "bold", color:"#004dcf"}}>
          <Fab align="left">{HakStatus(false)} {data[id].points}</Fab> {data[id].name} 
          </Typography>

          <hr></hr>
          <Typography gutterBottom variant="h6" component="h2" align="center">
            <img className={classes.logo} alt="logo" src={data[id].party_logo}/>
            :מפלגה
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="center">
            {data[id].summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="contained" color="primary" disabled={false}>
        <AddIcon />
      </Button>
      <div style={{float: "right"}}>
        <Button
            variant="contained" color="primary"
            onClick={()=> window.open("https://m.knesset.gov.il/mk/Pages/MKPersonalDetails.aspx?MKID="+ data[id].url_id )}>
          <InfoOutlinedIcon className={classes.infoIcon}/>  למידע נוסף לחץ כאן
        </Button>
      </div>
    </Card>
  );
}




