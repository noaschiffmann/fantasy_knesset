import React from 'react';
import Haak from './Haak';
<<<<<<< HEAD
import HaakStatus from './HaakStatus';
=======
>>>>>>> 985088b8df5c6348249de9317f1bf3dcbd90d818

// the list of all the haaks. Takes the info of the haak from AllHaaks.js and puts it in the format
// of the Haak

const HaakList = ({ AllHaaks }) => {
<<<<<<< HEAD
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
=======
    return (
        <div className={"flex content-start flex-wrap"}>
            {
                AllHaaks.map((user, i) => {
                    return (
                        <Haak
                            key = {i} 
                            id = {AllHaaks[i].id} 
                            name={AllHaaks[i].name} 
                            party={AllHaaks[i].party} 
                            points={AllHaaks[i].points}
                            image={AllHaaks[i].image}
                            />
                    );
                })
            }
>>>>>>> 985088b8df5c6348249de9317f1bf3dcbd90d818
        </div>
    );
}

export default HaakList;

