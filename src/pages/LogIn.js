import ShortSignUpForm from '../pages/ShortSignUpForm';
import React, { useEffect, useState } from "react";
import  Overlay  from 'react-overlay-component';
import { Button } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const LogIn = (props) => {
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);
    const configs = {
        animate: true,
    };
    const [register, setRegister] = useState(false);

   useEffect(()=>{
    setOverlay(false);
   },[register]);

    return (
        <div style={{marginLeft: "83.6%", marginTop: "-12%"}}>
        <Button style={{fontFamily: "Varela Round"}}
            onClick={()=>{setOverlay(true);}}><AccountCircleOutlinedIcon style={{color: "white"}} /> </Button>
        <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
            <ShortSignUpForm changeBottomBar={props.changeBottomBar} moveToSignUp={props.moveToSignUp} onRegister={()=>{setRegister(!register)}}/>
            <Button
                onClick={()=>{setOverlay(false);}} 
                className="danger">
            </Button>
    </Overlay>
    </div>
    );
}

export default LogIn;

