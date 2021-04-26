import React from 'react';
import Haak from './Haak'

// the list of all the haaks. Takes the info of the haak from AllHaaks.js and puts it in the format
// of the Haak

const HaakList = ({ AllHaaks }) => {
    const haakComponent = AllHaaks.map((user,i) => {
        return <Haak 
        key = {i} 
        id = {robots[i].id} 
        name={robots[i].name} 
        party={robots[i].party} 
        points={robots[i].points}/>
    })
    return (
        <div>
            {haakComponent}

        </div>

    );
}
export default HaakList;