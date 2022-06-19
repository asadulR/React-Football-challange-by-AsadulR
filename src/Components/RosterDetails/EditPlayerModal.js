import React from "react";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { dataContext } from "../SoccerManaging/SoccerManaging";
import { useState } from "react";
import { useEffect } from "react";

const EditPlayerModal = ({ playerEdit, setPlayerEdit }) => {
  const playerData = useContext(dataContext);
  const { excelFile, setExcelFile } = playerData;
  const [playerName, setPlayerName] = useState('');
  const [playerJersey, setPlayerJersey] = useState('');
  const [playerHeight, setPlayerHeight] = useState('');
  const [playerWeight, setPlayerWeight] = useState('');

  useEffect(()=>{
    setPlayerName(playerEdit['Player Name'])
    setPlayerJersey(playerEdit['Jersey Number'])
    setPlayerHeight(playerEdit['Height'])
    setPlayerWeight(playerEdit['Weight'])
  },[playerEdit])

  const countryArray = ["Argentinian", "Brazilian", "Costa Rican", "Dutch", "French", "German", "Guinea-Bissau", "Italian", "Portuguese", "Senegal", "Spanish", "Morocco"];
  const positionArray = ["Goalkeeper", "Defender", "Forward", "Midfielder"]



  const handlePlayerName = (e) => {
    const name = e.target.value;
    setPlayerName(name)
    
  };
  const handlePlayerJersey = (e) => {
    const jersey = e.target.value;
    setPlayerJersey(jersey)
    
  };
  const handlePlayerHeight = (e) => {
    const height = e.target.value;
    setPlayerHeight(height)
    
  };
  const handlePlayerWeight = (e) => {
    const weight = e.target.value;
    setPlayerWeight(weight)
    
  };



  const handleEditPlayer = (e) => {
    e.preventDefault();
    const playerName = e.target.pName.value;
    const playerJersey = e.target.pJersey.value;
    const playerHeight = e.target.pHeight.value;
    const playerWeight = e.target.pWeight.value;
    const playerNationality = e.target.pNation.value;
    const playerPosition = e.target.pPosition.value;
    const isActive = e.target.active.checked;
    console.log(isActive)
    
    let targetPlayerIndex;
    let targetPlayer
    const playersWithoutTarget = [];
    for(let i=0; i<excelFile.length;i++){
      if(excelFile[i]['Player Name'] === playerEdit['Player Name']){
        targetPlayerIndex = i;
        targetPlayer = excelFile[i];
      }
      else{
        playersWithoutTarget.push(excelFile[i]);
      }
    }

    targetPlayer["Player Name"] = playerName;
    targetPlayer["Jersey Number"] = playerJersey;
    targetPlayer["Height"] = playerHeight;
    targetPlayer["Weight"] = playerWeight;
    targetPlayer["Nationality"] = playerNationality;
    targetPlayer["Position"] = playerPosition;
    playersWithoutTarget.splice(targetPlayerIndex,0,targetPlayer);
    setExcelFile(playersWithoutTarget);
    setPlayerEdit(null);
  };
  return (
    <>
      <input type="checkbox" id="my-modal-edit" className="modal-toggle" />
      <div className="modal modal-open">
        <div className="modal-box player-edit-modal text-white relative">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Edit player</h3>
            <button className="text-sm" onClick={() => setPlayerEdit(null)}>
              <ImCross></ImCross>
            </button>
          </div>
          <div>
            <form className="text-white" onSubmit={handleEditPlayer}>
              <div className="flex gap-4">
                <div className="w-[70%]">
                  <p className="mt-3 mb-2">Player Name</p>
                  <input
                    onChange={handlePlayerName}
                    value={playerName || ''}
                    className="player-update-field pl-1 text-white"
                    type="text"
                    name="pName"
                  />
                </div>
                <div>
                  <p className="mt-3 mb-2">Jersey Number</p>
                  <input
                    className="player-update-field pl-1 text-white"
                    value={playerJersey || ''}
                    onChange={handlePlayerJersey}
                    type="text"
                    name="pJersey"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[50%]">
                  <p className="mt-3 mb-2">Height</p>
                  <input
                    className="player-update-field pl-1 text-white"
                    type="text"
                    value={playerHeight || ''}
                    onChange={handlePlayerHeight}
                    name="pHeight"
                  />
                </div>
                <div className="w-[50%]">
                  <p className="mt-3 mb-2">Weight</p>
                  <input
                    className="player-update-field pl-1 text-white"
                    type="text"
                    value={playerWeight || ''}
                    onChange={handlePlayerWeight}
                    name="pWeight"
                  />
                </div>
              </div>
              <div>
                <p className="mt-3 mb-2">Nationality</p>
                <select className="select w-full bg-transparent select-bordered border-white" name="pNation">
                  <option className="text-black" value="Argentinian">
                    Argentinian
                  </option>
                  {
                    countryArray.map(country => <option className="text-black" value={country} selected={playerEdit['Nationality'] === country?true:false}>
                    {country}
                  </option>)
                  }
                </select>
              </div>
              <div>
                <p className="mt-3 mb-2">Position</p>
            
                <select className="select w-full bg-transparent select-bordered border-white" name="pPosition">
                {
                    positionArray.map(position => <option className="text-black" value={position} selected={playerEdit['Position'] === position?true:false}>
                    {position}
                  </option>)
                  }
                </select>
              </div>
              <div>
                <p className="mt-3 mb-2">Starter</p>
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="active"
                      value="No"
                      className="radio radio-accent"
                      checked
                    />
                    <p>No</p>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="active"
                      value="Yes"
                      className="radio radio-accent"
                    />
                    <p>Yes</p>
                  </div>
                </div>
              </div>
              <div className="text-right mt-6">
                <button
                  type="submit"
                  className="btn btn-warning"
                >
                  Edit Player
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPlayerModal;
