import React from "react";
import Item_select from "./Item_select";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Task-2</h1>
      <div className="main">
        <div className="main2">
          <div className="main3">
            <div className="main3_1">Step 1: </div>
            <div className="main3_2">
              <label for="fileInput">Choose a file:</label>
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                accept=".json, .csv"
              />
              <p>Supported File type: .CSV, .JSON</p>
            </div>
          </div>
          <div className="main3">
            <div className="main3_1">Step 2: </div>
            <div className="main3_2">
              <form>
                <label for="filetype">File type:</label>
                <select id="filetype" name="filetype">
                  <option value="csv">csv</option>
                  <option value="pdf">pdf</option>
                  <option value="json" selected>
                    json
                  </option>
                </select>
                <br />
                <br />
                <br />
                <label for="charencode">Character Encoding:</label>
                <select id="charencode" name="charencode">
                  <option value="utf-9">UTF-9</option>
                  <option value="utf-8" selected>
                    UTF-8
                  </option>
                </select>
                <br />
                <br />
                <br />
                <label for="delim">Delimiter: </label>
                <select id="delim" name="delim">
                  <option value="bracket">bracket</option>
                  <option value="comma" selected>
                    comma
                  </option>
                </select>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <label for="header">Has Header:</label>
                <input type="checkbox" name="header" />
              </form>
            </div>
          </div>
        </div>
        <div className="main2">
          <Item_select />
        </div>
      </div>
    </div>
  );
}

export default Home;
