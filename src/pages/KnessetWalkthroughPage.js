import { React, useState } from "react";
import SearchBar from '../components/SearchBar';
import Hak from '../components/Hak';
import Overlay from 'react-overlay-component';
import { Box, Button } from '@material-ui/core';
import data from '../important/data.json';
import HakProfilePage from './HakProfilePage';


const MeliaaPage = () => {
  const [searchField,setSearchField]= useState('');

    function onSearchChange(event){
      setSearchField(event.target.value);
    }
    const filteredHaaks = data.filter(data => {
      return data.name.includes(searchField)});

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
    <div className='tc'>
      <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
      </head>
      <SearchBar searchChange={onSearchChange}/>
        <Box style={{width:'90%', marginLeft: '5%', alignItems:'center'}}>
        {filteredHaaks.map((item, index) => {
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