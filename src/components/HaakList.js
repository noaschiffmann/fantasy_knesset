import React from 'react';
import Haak from './Haak';

// the list of all the haaks. Takes the info of the haak from AllHaaks.js and puts it in the format
// of the Haak

const HaakList = ({ AllHaaks }) => {
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
        </div>
    );
}

export default HaakList;

