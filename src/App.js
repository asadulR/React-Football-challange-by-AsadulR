import { Link, Route, Routes, useLocation } from "react-router-dom";
import FormationOverview from "./components/FormationOverview/FormationOverview";
import RosterDetails from "./components/RosterDetails/RosterDetails";
import SoccerManaging from "./components/SoccerManaging/SoccerManaging";
import { BsDot, BsFillPeopleFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import "./App.css";
import Football from "./images/football.png";
import React, { useState } from "react";

export const searchContext = React.createContext();

function App() {
  const location = useLocation();
  const [teamName, setTeamName] = useState('My Team');
  const [showName, setShowName] = useState('My Team');
  const [showInputField, setShowInputField] = useState(false)
  const [showEdit, setShowEdit] = useState(true);
  const [hoverShow, setHoverShow] = useState(false)
  const [searchData, setSearchData] = useState('')
  const [searchValue, setSearchValue] = useState('');
  const [isFirstLoad, setFistLoad] = useState(false)

  const hadleSearch = (e) =>{
    if(e.key === "Enter"){
      setSearchData(searchValue);
      setSearchValue('');
    }
  }

  const handleButtonSearch = () =>{
    setSearchData(searchValue);
    setSearchValue('')
  }

  const handleSearhValue = (e) =>{
    setSearchValue(e.target.value);
  }
  const editTeamName = (e) =>{
    setTeamName(e.target.value);
}

  const changeName = () =>{
    setShowName(teamName);
    setShowInputField(false)
    setShowEdit(false)
    setHoverShow(false)
  }
  const changeNameEnter = (e) =>{
    if(e.key === 'Enter'){
      setShowName(teamName);
      setShowInputField(false)
      setShowEdit(false)
      setHoverShow(false)
    }
  }

  return (
    <div className="max-w-[1600px] min-h-[800px] flex mx-auto main-container-extra-style">
      <div className="w-20 bg-black text-white">
        <div className="border-2 border-yellow-500 h-[50px] mx-auto w-[50px] rounded-full mt-10">
          <img src={Football} className="w-full h-full object-cover" alt="" />
        </div>
        <Link to="/rosterDetails">
          <div className="flex justify-center mt-10 items-center">
            <span className="text-2xl w-[20%] text-yellow-400">
              {location.pathname.includes("roster") ? <BsDot></BsDot> : ""}
            </span>{" "}
            <span className="text-2xl w-[80%] pl-2">
              <GiHamburgerMenu></GiHamburgerMenu>
            </span>
          </div>
        </Link>
        <Link to="/soccerManaging">
          <div className="flex justify-center mt-10 items-center">
            <span className="text-2xl w-[20%] text-yellow-400">
              {location.pathname.includes("soccer") ? <BsDot></BsDot> : ""}
            </span>
            <span className="text-2xl w-[80%] pl-2">
              <BsFillPeopleFill></BsFillPeopleFill>
            </span>
          </div>
        </Link>
      </div>
      <div className="text-white flex-1 p-10">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-yellow-500">
              {location.pathname.includes("roster")
                ? "Roster Details"
                : "Formation overview"}
            </p>
            <div className="">
              {
                showInputField?<input
                className="bg-transparent hover:outline-none text-xl font-semibold outline-none border pl-2 py-1 rounded-md"
                value={teamName}
                type="text"
                maxLength={30}
                onBlur={changeName}
                onKeyPress={changeNameEnter}
                onChange={editTeamName}
              />:<div className="flex items-center gap-2 text-xl font-semibold" onMouseEnter={()=>setHoverShow(true)} onMouseLeave={()=>setHoverShow(false)}><span>{showName}</span> 
                {
                  showEdit && <button onClick={()=>setShowInputField(true)}><MdModeEditOutline></MdModeEditOutline></button>
                }
                {
                  !showEdit && <button className={`${!hoverShow && 'hidden'}`} onClick={()=>setShowInputField(true)}><MdModeEditOutline></MdModeEditOutline></button>
                }
              </div>
              }
              
              
              
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute text-2xl top-3 left-2">
                <AiOutlineSearch></AiOutlineSearch>
              </span>
              <input
                type="text"
                className="border pl-10 text-xl bg-transparent w-80 h-12 rounded-md"
                placeholder="Find Player"
                onChange={handleSearhValue}
                onKeyPress={hadleSearch}
              />
              {
                searchValue && <button onClick={handleButtonSearch} className="absolute right-4 top-3 font-semibold text-yellow-500">search</button>
              }
            </div>
            <label
              style={{ cursor: "pointer" }}
              htmlFor="my-modal-file-upload"
              className={` px-3 h-12 rounded-md flex font-semibold items-center ${isFirstLoad?'border':'bg-yellow-600'}`}
            >
              {isFirstLoad?'Re-':''}Import Team
            </label>
          </div>
        </div>
        <searchContext.Provider
          value={{searchData, setFistLoad}}
        >
            <Routes>
          <Route path="/" element={<SoccerManaging></SoccerManaging>}>
            <Route
              path="rosterDetails"
              element={<RosterDetails></RosterDetails>}
            ></Route>
            <Route
              path="soccerManaging"
              element={<FormationOverview></FormationOverview>}
            ></Route>
          </Route>
        </Routes>
        </searchContext.Provider>
        
      </div>
    </div>
  );
}

export default App;
