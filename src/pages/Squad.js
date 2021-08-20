/**
 * picking the team page
 */

import React, { useState, useEffect } from "react";
import SearchBar from '../components/SearchBar';
import { makeStyles, Grid, Button, Card } from '@material-ui/core';
import HakProfilePage from './HakProfilePage';
import Overlay from 'react-overlay-component';
import data from '../important/data.json';
import Scroll from '../components/Scroll';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Hak from '../components/Hak';
import all_users from '../important/all_users.json';
import axios from "axios";
import NAteam from '../components/NAteam';
import current_user from '../important/current_user.json';
import Rules from '../components/Rules';


const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: 100,
    minHeight: 120,
    borderRadius: 16,
    backgroundColor:"#d9e7f4",
    opacity: 0.7,
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
    zIndex: 2,
    color: "white"
  },
  cancelButton: {
    position: 'absolute',
    zIndex: 2,
    top: -4,
    right: -19,
    color: "#144569"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
    width:"100%",
    fontFamily:"Varela Round"
  },
  box: {
    borderRadius: 20,
    backgroundColor: "white",
    height:"100%",
    width:"90%",
    marginTop: 10,
    alignSelf: "center",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    },
}));

const curHaks = JSON.parse(JSON.stringify(data)).sort(() => Math.random() - 0.5);  // we want to show the Haks in a random order so the picking will be biased.

const Squad = (props) => {
  const classes = useStyles();
  const card = <Card className={classes.paper} elevation={2} />
  const [picked, setPicked] = useState([-1,-1,-1,-1,-1,-1])
  
  // show the team if you are only switching players
  if (current_user.user_name !== ""){
    for (let i in all_users){
      if (all_users[i].username === current_user.user_name && all_users[i].team.length > 0){
        setPicked(all_users[i].team);
        break;
      }
    }
  }

  const [change, setChange] = useState(true)

  useEffect(()=>{
    setPicked(picked)
  },[change]);

  function addHak(id){
    if (picked.indexOf(-1) !== -1 && !picked.includes(id)){
      picked[picked.indexOf(-1)] = id;
      setChange(!change)
    }
  }

  // remove Hak from the picked array
  function handleCancel(hakID){
    picked.splice(picked.indexOf(hakID), 1)
    picked.push(-1)
    setChange(!change)
  }

  const [rulesOverlay, setRulesOverlay] = useState(false);
  const closeRulesOverlay = () => setRulesOverlay(false);

  useEffect(()=>{
    setRulesOverlay(true);
  },[])

  const [errOverlay, setErrOverlay] = useState(false);
  const closeErrOverlay = () => setErrOverlay(false);

  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);
  const configs = {
    animate: true,
  };
  const [id, setId] = useState(0);

  function handleInfo(event, id){
    event.stopPropagation();
    setOverlay(true);
    setId(id);
  }
  
  /**
   * send the team to the backend and check if valid
   */
  function acceptTeam(){
    axios.get('https://fk-backend.herokuapp.com/checkTeam', {
      params: {
               'username': current_user.user_name,
               'hak1': data[picked[0]].url_id, 
               'hak2': data[picked[1]].url_id,
               'hak3': data[picked[2]].url_id,
               'hak4': data[picked[3]].url_id,
               'hak5': data[picked[4]].url_id,
               'hak6': data[picked[5]].url_id
              },
    })
    .then((response) => {
      if (response.data === 'True'){
        axios.get('https://fk-backend.herokuapp.com/getUsersData')
            .then((response) => {
              for (let i in response.data){
                all_users[i] = response.data[i]
              }
              props.onAcceptTeam() 
            })
            .catch((error) => {
              console.log(error);
              alert("יש בעית תקשורת, נסה להתחבר מאוחר יותר");
            })
      }
      else {
        setErrOverlay(true);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("יש בעית תקשורת, נסה שוב מאוחר יותר");
    })
  }

  const [genderField,setGenderField]= useState('');
  const [partyField, setPartyField]= useState('');
  const [sortField, setSortField]= useState('');
  const [searchField, setSearchField]= useState('');

  function getTeamName(){
    for (let i in all_users){
      if (all_users[i].username === current_user.user_name){
        return all_users[i].teamName
      }
    }
  }

  // search filter
  function onSearchChange(event){
    setSearchField(event.target.value);
  }

  // search filter
  function sortHaks(data){
    if (sortField === 2){
      return data.sort(function(a,b){
        return b.points[b.points.lenght-1] - a.points[b.points.lenght-1]
      });
    } else{
      return data.sort(function(a,b){
        return a.name - b.name
      });
    }
  } 
  
  // the Haks filtered
  const filteredHaks = sortHaks(curHaks).filter(data => {
    return data.name.includes(searchField) && data.party.includes(partyField) && data.gender.includes(genderField)});

  return(
    <div className={classes.container}>
          <h2 style={{color:"black", fontSize:20, fontWeight:"bold", marginTop:15, marginBottom:10}} align="center">{getTeamName()}</h2>
          <div align="center" className={classes.box} style={{paddingLeft:12, paddingRight:12, paddingTop:20, paddingBottom:20}}>
        <Grid container  justify="center" spacing={1}>
            {picked.map((value) => {
              if (value === -1){
                return(<Grid item> {card} </ Grid>);
              }
              return(
                <Grid item>
                  <Button style={{padding: '0px 0px'}}>
                    <Button className={classes.cancelButton} 
                            onClick={() => handleCancel(value)}>
                    <HighlightOffIcon /> 
                    </Button>
                    <Hak id={value} /> 
                  </Button>
                </Grid>);
            })}
            </Grid>
    <br></br>

      <Button
          variant="contained"
          color="secondary"
          disabled={picked.indexOf(-1) !== -1}
          onClick={acceptTeam}
          style={{alignSelf:'center', width:155, fontFamily: "Varela Round"}}
        >
          אישור קבוצה
        </Button>
      </div>
      <div align="center">
      <br></br>
      <SearchBar setPartyField={(e) => setPartyField(e)} setGenderField={(e) => setGenderField(e)} setSortField={(e) => setSortField(e)} searchChange={onSearchChange}/>        

    </div>
    <br></br>
    <div className={classes.box} style={{width:"90%", paddingTop:15, paddingBottom:15, marginTop:-10}}>
    <Scroll>
    {filteredHaks.map((item) => {
        if (!picked.includes(item.id)){
          return(
             <Button style={{padding: '4px 2px'}} onClick={() => addHak(item.id)}>
              <Button className={classes.infoButton} onClick={(event)=>handleInfo(event, item.id)}> <InfoOutlinedIcon /> </Button>
              <Hak id={item.id} />
             </Button> 
          );
        }
      })}           
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <HakProfilePage id={id} />
      </Overlay>

      <Overlay configs={configs} isOpen={errOverlay} closeOverlay={closeErrOverlay}>
        <NAteam />
      </Overlay>

      <Overlay configs={configs} isOpen={rulesOverlay} closeOverlay={closeRulesOverlay}>
        <Rules />
      </Overlay>

    </Scroll>
  </div>
  <br></br>
  </div>
  );
}

export default Squad;
