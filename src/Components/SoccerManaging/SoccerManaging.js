import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import * as XLSX from "xlsx";
export const dataContext = React.createContext();

const SoccerManaging = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  const [excelData, setExcelData] = useState(null);

  const [goalkeepers, setGoalkeepers] = useState([]);
  const [defenders, setDefenders] = useState([]);
  const [midfilders, setMidfielders] = useState([]);
  const [forwards, setForwards] = useState([]);

  const fileType = ["text/csv"];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          const workbook = XLSX.read(e.target.result, { type: "buffer" });
          const worksheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[worksheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          setExcelData(data);
        };
      } else {
        setExcelFileError("Please select only file types .csv");
      }
    } else {
      console.log("please select your file");
    }
  };

  useEffect(() => {
    if (excelData) {
      const goalkeepers = excelData.filter(
        (goal) => goal.Position === "Goalkeeper"
      );
      setGoalkeepers(goalkeepers);

      const defenders = excelData.filter(
        (defend) => defend.Position === "Defender"
      );
      setDefenders(defenders);

      const midfielders = excelData.filter(
        (mid) => mid.Position === "Midfielder"
      );
      setMidfielders(midfielders);

      const forwards = excelData.filter(
        (forward) => forward.Position === "Forward"
      );
      setForwards(forwards);
    }
  }, [excelData]);

  const passExcelData = () => {
    setExcelFile(excelData);
    document.getElementById('file-upload').value = '';

  };
  useEffect(() => {
    setExcelData(null)
  }, [excelFile])

  return (
    <>
      <div>
        <dataContext.Provider
          value={{ excelFile: excelFile, setExcelFile: setExcelFile }}
        >
          <Outlet></Outlet>
        </dataContext.Provider>
      </div>

      {/* This is modal  */}
      <>
        <input type="checkbox" id="my-modal-file-upload" className="modal-toggle" />
        <div className="modal mt-[-200px]">
          <div className="modal-box w-11/12 max-w-5xl bg-black relative">
            <h3 className="font-bold text-lg">Importer</h3>
            <hr />
            <p className="py-4">Roster File</p>

            <input type="file" id="file-upload" onChange={handleFile} className="border-2" />
            <p>{excelFileError}</p>

            {excelData && (
              <div>
                <h1>File summary</h1>
                <div className="mt-16">
                  <table className="w-full">
                    <tr>
                      <th>Total Players</th>
                      <th>Goalkeepers</th>
                      <th>Defenders</th>
                      <th>Midfielders</th>
                      <th>Forwards</th>
                    </tr>
                    <tr>
                      <td>{excelData?.length}</td>
                      <td>{goalkeepers?.length}</td>
                      <td>{defenders?.length}</td>
                      <td>{midfilders?.length}</td>
                      <td>{forwards?.length}</td>
                    </tr>
                  </table>
                </div>
                <label
                  htmlFor="my-modal-file-upload"
                  onClick={passExcelData}
                  className="btn btn-warning ml-auto"
                >
                  Upload
                </label>
              </div>
            )}
            <div className="modal-action">
              <label
                htmlFor="my-modal-file-upload"
                className="btn btn-xs absolute top-2 right-6"
              >
                X
              </label>
            </div>
          </div>
        </div>
      </>

      
    </>
  );
};

export default SoccerManaging;
