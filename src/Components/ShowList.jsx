import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ShowList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fields = queryParams.get("fields");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fields]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://s3.amazonaws.com/open-to-cors/assignment.json"
      );
      const jsonData = await response.json();
      console.log(jsonData);

      const filteredData = Object.keys(jsonData.products).reduce(
        (acc, productId) => {
          const product = jsonData.products[productId];
          console.log(product.subcategory);

          const filteredProduct = fields
            .split(",")
            .reduce((filteredProduct, field) => {
              // console.log(field);
              filteredProduct[field] = product[field];
              //   console.log(filteredProduct);
              return filteredProduct;
            }, {});

          if (
            Object.keys(filteredProduct).length === fields.split(",").length
          ) {
            // Include only products with all specified fields
            acc[productId] = filteredProduct;
          }

          return acc;
        },
        {}
      );
      console.log(filteredData);

      setData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Selected Product List</h2>
      <table border="1">
        <thead>
          <tr>
            {fields.split(",").map((field) => (
              <th key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((productId) => (
            <tr key={productId}>
              {fields.split(",").map((field) => (
                <td key={field}>{data[productId][field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowList;
