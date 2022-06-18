import React from "react";
import "./RosterDetails.css";
import { useContext } from "react";
import { dataContext } from "../SoccerManaging/SoccerManaging";
import SinglePlayer from "./SinglePlayer";
const RosterDetails = () => {
  const playerData = useContext(dataContext);

  const { excelFile, setExcelFileetMyData } = playerData;
  console.log(excelFile);
  return (
    <div>
      <div className="min-h-[700px]">
        <div className="overflow-x-auto p-5 mt-5 table-container h-[700px]">
          <table className="w-full">
            <thead>
              <tr className="">
                <th className="font-semibold text-accent">Player Name</th>
                <th className="font-semibold text-accent">Jersey Number</th>
                <th className="font-semibold text-accent">Starter</th>
                <th className="font-semibold text-accent">Position</th>
                <th className="font-semibold text-accent">Height</th>
                <th className="font-semibold text-accent">Weight</th>
                <th className="font-semibold text-accent">Nationality</th>
                <th className="font-semibold text-accent">Appearances</th>
                <th className="font-semibold text-accent">Minutes Played</th>
                <th className="font-semibold text-accent"></th>
              </tr>
            </thead>
            <tbody>
              {excelFile &&
                excelFile.map((player) => (
                  <SinglePlayer
                    key={player["Player Name"]}
                    player={player}
                  ></SinglePlayer>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RosterDetails;
