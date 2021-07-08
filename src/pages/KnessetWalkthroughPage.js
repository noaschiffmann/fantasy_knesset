import { React, useEffect, useState } from "react";
import SearchBar from '../components/SearchBar';
import Hak from '../components/Hak';
import Overlay from 'react-overlay-component';
import { Box, Button } from '@material-ui/core';
import data from '../important/data.json';
import HakProfilePage from './HakProfilePage';


const MeliaaPage = () => {
  const [genderField,setGenderField]= useState('');
  const [partyField, setPartyField]= useState('');
  const [searchField, setSearchField]= useState('');
  const [sortField, setSortField]= useState('');


  function onSearchChange(event){
    setSearchField(event.target.value);
    
  }

  function sortHaaks(data){
    if (sortField === 2){
      return data.sort(function(a,b){
        return b.coins - a.coins
      });
    } else{
      return data.sort(function(a,b){
        return a.id - b.id
      });
    }
    
  } 
  
  const filteredHaaks = sortHaaks(data).filter(data => {
    return data.name.includes(searchField) && data.party.includes(partyField) && data.gender.includes(genderField)});
  
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
  return (
    <div className='tc' style={{width: "100%", marginTop: "-3%"}}>
      <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
      </head>
      <br></br>
      <SearchBar setPartyField={(e)=>setPartyField(e)} setGenderField={(e) =>setGenderField(e)} setSortField={(e) =>setSortField(e)} searchChange={onSearchChange}/>        
        <Box style={{width:'100%', alignItems:'center'}}>
        {(filteredHaaks).map((item, index) => {
                  return(
                    <row >
                    <Button  onClick={() => handleClick(item.id)}>
                    <Hak id={item.id} flag = {false}  />
                    </Button>
                    </row>
                    );
                })
        }
      </Box>
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <HakProfilePage id={id}/>
      </Overlay>
    </div>
  );
}

export default MeliaaPage;