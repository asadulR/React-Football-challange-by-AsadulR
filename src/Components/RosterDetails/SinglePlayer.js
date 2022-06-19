import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditPlayerModal from "./EditPlayerModal";

const SinglePlayer = ({ player }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [playerEdit, setPlayerEdit] = useState(null);

  const editPlayer = (getPlayer) => {
    setPlayerEdit(getPlayer);
  };

  return (
    <>
      <tr>
        <td className="">
          <div className="flex items-center gap-2">
            <div>
              <img
                src={player["Flag Image"]}
                className="w-[20px] h-[20px]"
                alt=""
              />
            </div>
            <div>{player["Player Name"]}</div>
          </div>
        </td>
        <td>{player["Jersey Number"]}</td>
        <td>{player["Starter"]}</td>
        <td>{player["Position"]}</td>
        <td>{player["Height"]}</td>
        <td>{player["Weight"]}</td>
        <td>{player["Nationality"]}</td>
        <td>{player["Appearances"]}</td>
        <td>{player["Minutes Played"]}</td>
        <td className="">
          <div className="dropdown dropdown-end">
            <label
              tabindex="0"
              className="text-xl m-1"
              style={{ cursor: "pointer" }}
              onClick={() => setIsOpen(true)}
            >
              <BsThreeDots></BsThreeDots>
            </label>
            {isOpen && (
              <ul
                tabindex="0"
                className="dropdown-content menu text-white p-2 shadow bg-black rounded-box w-52 relative top-6 dropdown-extra-style"
              >
                <span
                  className="absolute right-2 top-2 text-xs"
                  onClick={() => setIsOpen(false)}
                  style={{ cursor: "pointer" }}
                >
                  <ImCross></ImCross>
                </span>
                <li className="mt-4">
                  <button className="" onClick={() => editPlayer(player)}>
  
                      <MdModeEditOutline></MdModeEditOutline>
                      Edit Player
                  </button>
                </li>
                <li>
                  <div>
                    <span className="text-xl">
                      <RiDeleteBin6Line></RiDeleteBin6Line>
                    </span>
                    <span>Delete Player</span>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </td>
      </tr>

      <>
       {
        playerEdit &&  <EditPlayerModal playerEdit={playerEdit} setPlayerEdit={setPlayerEdit}></EditPlayerModal>
       }
      </>
      <></>
    </>
  );
};

export default SinglePlayer;
