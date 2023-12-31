import { useState } from "react";
import React from "react";
import "./Item_select.css";
import { useNavigate } from "react-router-dom";

function Item_select() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const [availableFields, setAvailableFields] = useState([
    "subcategory",
    "price",
    "title",
    "popularity",
    "Product ID",
    "Description",
    "Rating",
    "UTM Source",
    "UTM Medium",
  ]);

  const [displayedFields, setDisplayedFields] = useState([]);

  const handleAddFields = () => {
    if (availableFields.length > 0) {
      const fieldToAdd = availableFields[count];
      setDisplayedFields([...displayedFields, fieldToAdd]);
      // setAvailableFields(availableFields.slice(1));
    }
    setCount(count + 1);
  };

  const handleRemoveFields = () => {
    if (displayedFields.length > 0) {
      const fieldToRemove = displayedFields[0];
      // setAvailableFields([...availableFields, fieldToRemove]);
      setDisplayedFields(displayedFields.slice(1));
    }
    setCount(count - 1);
  };
  const handleNext = () => {
    console.log("hello from handle next");
    if (displayedFields.length > 0) {
      const queryParams = displayedFields.join(",");
      console.log(queryParams);
      navigate(`/show_list?fields=${queryParams}`);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="field1">
        <h2>Available Fields</h2>
        <ul>
          {availableFields.map((field) => (
            <li
              key={field}
              onClick={() => handleToggleSelection(field)}
              style={{
                cursor: "pointer",
                backgroundColor: field.selected ? "#e0e0e0" : "inherit",
              }}
            >
              {field}
            </li>
          ))}
        </ul>
      </div>

      <div className="field2">
        <div>
          <button onClick={handleAddFields}>&gt;&gt;</button>
        </div>
        <div>
          <button onClick={handleRemoveFields}>&lt;&lt;</button>
        </div>
      </div>

      <div className="field3">
        <h2>Fields to be Displayed</h2>
        <ul>
          {displayedFields.map((field) => (
            <li key={field} onClick={() => handleToggleSelection(field)}>
              {field}
            </li>
          ))}
        </ul>
      </div>
      <div className="main4">
        <div>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
        <div className="main4_2">
          <button className="btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Item_select;
