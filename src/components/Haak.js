import React from 'react';
import 'tachyons';
import '../pages/HomeTab.css';

const Haak = ({name,party,id,points,personalid, status}) =>{
    return(
        <div className = 'card tc bg-blue br3 pa3 ma2 dib bw2 grow shadow-5 '> 
            <img alt='AllHaaks' src={`https://fs.knesset.gov.il/globaldocs/MK/${personalid}.png?v=20210430_43917?200x200`} height="175" width="150"> 
            </img>
            <div>
                <h2>{name}</h2>
                <p>{party}</p>
                <p>{points}</p>
                <p>{status}</p>
            </div>
        </div>
    );
}
export default Haak;