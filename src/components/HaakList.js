import React from 'react';
import Haak from './Haak';
import HaakStatus from './HaakStatus';

// the list of all the haaks. Takes the info of the haak from AllHaaks.js and puts it in the format
// of the Haak

const HaakList = ({ AllHaaks }) => {
    const haakComponent = AllHaaks.map((user,i) => {
        return <Haak 
        key = {i} 
        id = {AllHaaks[i].id} 
        name={AllHaaks[i].name} 
        party={AllHaaks[i].party} 
        points={AllHaaks[i].points}
        personalid={AllHaaks[i].personalid}
        status={HaakStatus(AllHaaks[i].status)}/>
    })
    return (
        <div>
            {haakComponent}
        </div>

    );
}
export default HaakList;