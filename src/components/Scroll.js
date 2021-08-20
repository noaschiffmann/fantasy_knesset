/**
 * the scroll component appears in the building the team page
 */


import React from 'react';

const Scroll = (props) =>{
    return(
        <div  className='tc' style = {{ overflowY: 'scroll', height:'350px', width:'90%', marginLeft: '5%'}}>
            {props.children}
        </div>
    );
}

export default Scroll;