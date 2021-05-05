import React from 'react';

function HaakStatus(j) {
    switch(j) {
        case 'up': return (<div>&#128314;</div>);
        case 'down': return (<div>🔻</div>);
        default: return (<div>↔️</div>)
    }
};

export default HaakStatus;