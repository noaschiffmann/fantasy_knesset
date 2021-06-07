import React, {Component} from "react";
import Marquee from "react-fast-marquee";


const ChangeBar = () => {
    function pointsNews(){
        return "בני גנץ 8 ~ בנימין נתניהו 9 ~ מרב מיכאלי 12 ~ מיכאל ביטון 11 ~ מירב כהן 12 ~ יאיר לפיד 9 ~ אחמד טיבי 12~"
    }
    
    return (
    <Marquee direction="right" gradientWidth="0" style={{backgroundColor:"#c4def6", fontSize:11, padding:"2px"}} >
      {pointsNews()}
    </Marquee>
    )
};

export default ChangeBar;