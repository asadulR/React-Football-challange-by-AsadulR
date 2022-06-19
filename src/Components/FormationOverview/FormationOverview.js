import React from 'react';
import { useContext } from 'react';
import { dataContext } from '../SoccerManaging/SoccerManaging';
import SoccerLineUp from 'react-soccer-lineup'

const FormationOverview = () => {
    const { myData } = useContext(dataContext)


    return (
        <div>
            <h1>Formation overview {myData}</h1>

            <div className="mt-10">
                <SoccerLineUp
                    size={"normal"}
                    color={"#359C46"}
                    pattern={"lines"}
                />
            </div>
        </div>
    );
};

export default FormationOverview;