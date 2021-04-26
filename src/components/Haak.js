import React from 'react';

const Haak = ({name,party,id,points}) =>{
    return(
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt = 'AllHaaks' src={'https://robohash.org//{id}?200x200'} />
            <div>
                <h2>{name}</h2>
                <p>{party}</p>
                <p>{points}</p>
            </div>
        </div>
    );
}
export default Haak;