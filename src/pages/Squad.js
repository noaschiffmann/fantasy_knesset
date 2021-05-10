import React, { useState} from "react";
import Hak  from "../components/Hak";
import SearchBox from '../components/SearchBox';
import SearchBar from '../components/SearchBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import HakProfilePage from './HakProfilePage';
import Overlay from 'react-overlay-component';
import data from '../important/data.json';
import Card from '@material-ui/core/Card';
import Scroll from '../components/Scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 90
  },
  paper: {
    position: 'relative',
    height: 10,
    width: 5, 
    minWidth: 140,
    minHeight: 180,
    margin: 7,
    borderRadius: 16,

  },
  control: {
    padding: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  
}));


const Squad = (props)=> {
    const classes = useStyles();
    const [curHaaks, setCurHaaks] = useState(JSON.parse(JSON.stringify(data)));  
    const card = <Card className={classes.paper} elevation={3}/>
    const [picked,setPicked] = useState([{id:0 ,elem:card}, {id:1 ,elem:card}, {id:2 ,elem:card} , {id:3 ,elem:card},{id:4 ,elem:card},{id:5 ,elem:card}]);
    const [numPicked, setNumPicked] = useState(0);
    const [coins, setCoins] = useState(60);
    
    function addHak(id){
      if(numPicked < 6){
        picked[numPicked].elem = 
        // <Card className={classes.paper} elevation={3}>
        //     <CardHeader action={
        //   <IconButton aria-label="settings">
        //     <HighlightOffIcon />
        //   </IconButton>
        //   } style={{backgroundSize: 'cover', backgroundPosition: 'center', background:<Haak id={id} flag = {true}/>
        // }}/>
          <Hak id={id} flag = {true}/>
        //   </Card>;
          setNumPicked(numPicked+1);
          setCoins(coins-data[id].coins);
        var index = curHaaks.findIndex(function(item,i){
          return item.id === id
        });
        curHaaks[index].id = -1;
      }
    }

    const [spacing, setSpacing] = React.useState(2);
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);
    const configs = {
      animate: true,
    };
    const [id, setId] = useState(0);

    function handleClick(id){
      setOverlay(true);
      setId(id);
    }

    const [searchField,setSearchField]= useState('');

    function onSearchChange(event){
      setSearchField(event.target.value);
    }
    const filteredHaaks = curHaaks.filter(data => {
      return data.name.includes(searchField)});
    
    return(
      <div class="container-fluid" style={{backgroundColor:"#F7F7F7"}}>
        <div class="row">
          <div class="col-md-12" align="center">
            <h1 style={{fontSize: 30, marginTop:-20, color: 'black'}}>🐣 אפרוחי בית זית 🐣</h1>
            <Button variant="outlined" size="medium" color="default" align="center" style={{ marginTop:8, fontFamily: "Varela Round", width: 155, fontSize: "14px"}}>
              מנדטים שנותרו: {coins}  
          </Button>
          </div>
        </div>
        <br></br>

        <div class="col-md-10">
          <Grid container className={classes.root} spacing={2} >
              <Grid container justify="center" spacing={spacing}>

              {picked.map((value) => (
                  <Grid key={value.id} item>
                  {value.elem}
                  </Grid>
                    ))}
                </Grid>
            </Grid>
                
          </div>
      &nbsp;
      <div align="center">
        <div align="left">
        {AcceptGroupButton(props)}</div>
        <SearchBar searchChange={onSearchChange} />
      </div>
      
      <hr></hr>
      
      <Scroll>

        <div class = "row" style={{marginRight:'5%', marginLeft:'5%'}}>
            
          <div className = "characters" class = "col-md-12" >     
              {filteredHaaks.map((item, index) => {
                if (item.id !== -1){
                  return(
                    <row >
                    <Button  onClick={() => addHak(item.id)}>
                    <Hak id={item.id} flag = {true}  />
                    </Button>
                    </row>
                  
                  );

                }
                  })
              }           
              <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                <HakProfilePage id={id} />
              </Overlay>                   
        </div>
      </div>
      </Scroll>
    </div>

    );

}
export default Squad;

function AcceptGroupButton (props) {
  const classes = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    wrapper: {
      margin: theme.spacing(1),
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }));
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const buttonClassname = clsx({
      [classes.buttonSuccess]: success,
    });

    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);

    const handleButtonClick = () => {
      // if (!loading) {
      //   setSuccess(false);
      //   setLoading(true);
      //   timer.current = window.setTimeout(() => {
      //     setSuccess(true);
      //     setLoading(false);
      //   }, 2000);
      // }
      props.onAcceptTeam();
    };

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="secondary"
            className={buttonClassname}
            disabled={loading}
            onClick={handleButtonClick}
            style={{width:155, fontFamily: "Varela Round"}}
          >
            אישור קבוצה
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </div>
    );
  }


