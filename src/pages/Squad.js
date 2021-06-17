import React, { useState, useEffect } from "react";
import SearchBar from '../components/SearchBar';
import { makeStyles, Grid, Button, CircularProgress, Card } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import HakProfilePage from './HakProfilePage';
import Overlay from 'react-overlay-component';
import data from '../important/data.json';
import Scroll from '../components/Scroll';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Hak from '../components/Hak'

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    // position: 'relative',
    minWidth: 100,
    minHeight: 120,
    borderRadius: 16,
  },
  control: {
    padding: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  infoButton: {
    position: 'absolute',
    top: 2,
    right: -15,
    zIndex: 2
  },
  cancelButton: {
    position: 'absolute',
    zIndex: 2,
    top: -4,
    right: -19
  }
}));


const Squad = (props)=> {
  const classes = useStyles();
  const [curHaks, setCurHaks] = useState(JSON.parse(JSON.stringify(data)));  
  // const [filteredHaks, setHaks] = useState(JSON.parse(JSON.stringify(data)))
  const card = <Card className={classes.paper} elevation={3}/>
  const [picked, setPicked] = useState([card, card, card, card, card, card])
  const [pickedID, setPickedID] = useState([])
  // const [change, setChange] = useState(true);
  // const [picked, setPicked] = useState([{id:0, elem:card}, {id:1, elem:card}, {id:2, elem:card}, {id:3, elem:card}, {id:4, elem:card}, {id:5, elem:card}]);
  // const [numPicked, setNumPicked] = useState(0);
  let numPicked = 0;
  const [change, setChange] = useState(false)

  useEffect(()=>{
    setChange(true);
   },[picked]);

  function addHak(id){
    if(numPicked < 6){
      
      console.log(numPicked)
      picked[numPicked] = 
      // picked[numPicked].elem = 
        (<Button style={{padding: '0px 0px'}}>
          <Button color='secondary' 
                  className={classes.cancelButton} 
                  onClick={()=>handleCancel(numPicked, pickedID.length-1)}>
            <HighlightOffIcon /> 
          </Button>
          <Hak id={id} /> 
        </Button>);
      // setPicked(picked)
      pickedID.push(id);
      // setNumPicked(numPicked + 1);
      numPicked++;
      // setChange(false);

      console.log(pickedID)
      console.log(numPicked)
      // delete the selected Hak from the list of not selected Haks
      // setHaks(filteredHaks)
      // var index = curHaaks.findIndex(function(item, i){
      //   return item.id === id
      // });
      // curHaaks[index].id = -1;
    }
  }

  function handleCancel(elemInd, idInd){
    
    console.log(numPicked)
    
    picked.splice(elemInd, 1)
    picked.push(card)
    pickedID.splice(idInd, 1)

    console.log(pickedID)

    // setNumPicked(numPicked - 1);
    numPicked--;
    setChange(false)
  }

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
  const [searchField, setSearchField]= useState('');
  function onSearchChange(event){
    setSearchField(event.target.value);
  }

  const filteredHaks = curHaks.filter(data => {
    return data.name.includes(searchField)
  });

  function handleInfo(event, id){
    event.stopPropagation();
    handleClick(id)
  }
  
  return(
    <div class="container-fluid">
          <h2 style={{color:"black"}} align="center">🐣 אפרוחי בית זית 🐣</h2>
        <Grid container className={classes.root} spacing={1}>
            <Grid container justify="center" spacing={2} change={change}>
              {picked.map((value) => (
                  <Grid item>
                    {/* {value.elem}                    */}
                    {value}
                  </Grid>
                ))}
              </Grid>
          </Grid>

    <br></br>
    <div align="center">
      {AcceptGroupButton(props)}
      <SearchBar searchChange={onSearchChange} />
    </div>
  
    <hr></hr>
    
    <Scroll>
      {filteredHaks.map((item) => {
        if (!pickedID.includes(item.id)){
        // if (item.id !== -1){
          return(
             <Button style={{padding: '6px 4px'}} onClick={() => addHak(item.id)}>
              <Button color='primary' className={classes.infoButton} onClick={(event)=>handleInfo(event, item.id)}> <InfoOutlinedIcon /> </Button>
              <Hak id={item.id} />
             </Button> 
          );
        }
      })}           
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <HakProfilePage id={id} />
      </Overlay>                   
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

    useEffect(() => {
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


