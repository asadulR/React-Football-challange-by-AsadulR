import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { MdModeEditOutline } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'

const SinglePlayer = ({ player }) => {
  console.log(player);
  const [isOpen, setIsOpen] = useState(false);

  const handleEditPlayer = (e) =>{

  }

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
          <div class="dropdown dropdown-end">
            <label
              tabindex="0"
              class="text-xl m-1"
              style={{ cursor: "pointer" }}
              onClick={() => setIsOpen(true)}
            >
              <BsThreeDots></BsThreeDots>
            </label>
            {isOpen && (
              <ul
                tabindex="0"
                class="dropdown-content menu text-white p-2 shadow bg-black rounded-box w-52 relative top-6 dropdown-extra-style"
              >
                <span
                  className="absolute right-2 top-2 text-xs"
                  onClick={() => setIsOpen(false)}
                  style={{ cursor: "pointer" }}
                >
                  <ImCross></ImCross>
                </span>
                <li className="mt-4">
                  <label for="my-modal-edit" class="">
                    <span className="text-xl"><MdModeEditOutline></MdModeEditOutline></span>
                    <span>Edit Player</span>
                  </label>
                </li>
                <li>
                  <div>
                  <span className="text-xl"><RiDeleteBin6Line></RiDeleteBin6Line></span>
                  <span>Delete Player</span>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </td>
      </tr>

      <>
        <input type="checkbox" id="my-modal-edit" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box player-edit-modal text-white relative">
            <div className="flex items-center justify-between">
            <h3 class="font-bold text-lg">Edit player</h3>
            <label for="my-modal-edit" class="text-sm">
            <ImCross></ImCross>
              </label>
            </div>
            <div>
              <form className="text-white" onClick={handleEditPlayer}>
                <div className="flex gap-4">
                  <div className="w-[70%]">
                    <p className="mt-3 mb-2">Player Name</p>
                    <input className="player-update-field" type="text" />
                  </div>
                  <div>
                    <p className="mt-3 mb-2">Jersey Number</p>
                    <input className="player-update-field" type="text" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-[50%]">
                    <p className="mt-3 mb-2">Height</p>
                    <input className="player-update-field" type="text" />
                  </div>
                  <div className="w-[50%]">
                    <p className="mt-3 mb-2">Weight</p>
                    <input className="player-update-field" type="text" />
                  </div>
                </div>
                <div>
                  <p className="mt-3 mb-2">Nationality</p>
                  <select class="select w-full bg-transparent select-bordered border-white">
                    <option className="text-black" selected>
                      Pick your favorite Simpson
                    </option>
                    <option className="text-black">Homer</option>
                    <option className="text-black">Marge</option>
                    <option className="text-black">Bart</option>
                    <option className="text-black">Lisa</option>
                    <option className="text-black">Maggie</option>
                  </select>
                </div>
                <div>
                  <p className="mt-3 mb-2">Nationality</p>
                  <select class="select w-full bg-transparent select-bordered border-white">
                    <option className="text-black" selected>
                      Pick your favorite Simpson
                    </option>
                    <option className="text-black">Homer</option>
                    <option className="text-black">Marge</option>
                    <option className="text-black">Bart</option>
                    <option className="text-black">Lisa</option>
                    <option className="text-black">Maggie</option>
                  </select>
                </div>
                <div>
                  <p className="mt-3 mb-2">Starter</p>
                  <div className="flex gap-4">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="radio-2"
                      class="radio radio-accent"
                      checked
                    />
                    <p>No</p>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="radio-2"
                      class="radio radio-accent"
                    />
                    <p>Yes</p>
                  </div>
                  </div>
                </div>
                <div className="text-right mt-6">
                <label type="submit" for="my-modal-edit" class="btn btn-warning">
                Edit Player
              </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>

      <></>
    </>
  );
};

export default SinglePlayer;
