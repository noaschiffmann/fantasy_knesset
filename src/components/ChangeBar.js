/**
 * the moving top ligh-blue bar, with the updated Haks points
 */


import React from "react";
import Marquee from "react-fast-marquee";
import data from '../important/data.json';

const ChangeBar = () => {
    function pointsNews(){
      let output = "";
      for (let key in data){
        output += data[key].name + " ~ " + data[key].points[data[key].points.length - 1] + "+, "
      }
        return output;
    }
    
    return (
    <Marquee direction="right" gradientWidth="0" style={{fontFamily:"Varela Round", backgroundColor:"#c4def6", fontSize:11, padding:"2px"}} >
      {pointsNews()}
    </Marquee>
    )
};

export default ChangeBar;