import { Button, TableCell } from "@material-ui/core";
import SignUpForm from './SignUpForm'
import { React, Component, useState } from "react";
import FantasyHeader from '../components/FantasyHeader';
import HakProfilePage from './HakProfilePage';

import 'reactjs-popup/dist/index.css'
import NoTeamPage from './NoTeamPage';
import Hak from '../components/Hak';
import Overlay from 'react-overlay-component';

import data from '../important/data.json';

const MainPage = () => {
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
    <div>
      <FantasyHeader></FantasyHeader>
      {data.map((item) => 
          <Button onClick={() => handleClick(item.id)}>
            <Hak id={item.id}  />
          </Button>
        )
      }
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <HakProfilePage id={id} />
      </Overlay>

    </div>
  );
}

  export default MainPage;
