import React from 'react';
import { useContext } from 'react';
import { dataContext } from '../SoccerManaging/SoccerManaging';

const FormationOverview = () => {
    const {myData} = useContext(dataContext)
 

    return (
        <div>
            <h1>Formation overview {myData}</h1>
        </div>
    );
};

export default FormationOverview;