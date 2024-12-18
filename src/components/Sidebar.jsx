import React from "react";
import httpClient from "../services/httpClient";
import { ProductsContext } from "../context/product";
import { useContext } from "react";

const categories = ["phone", "TV", "airpods", "smart watch"];
const btnStyle = {
  color: "#dcdcdc",
  fontSize: "20px",
  textDecoration: "none",
  background: "none",
  border: "none",
  padding: "0",
  cursor: "pointer",
};
const Sidebar = () => {
  const { setProduct } = useContext(ProductsContext);
  return (
    <div>
      <div className="sidebar">
        <ul>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={async () => {
                  const response = await httpClient.get(
                    `/products?category=${cat}`
                  );

                  setProduct(response.data);
                }}
                className="btn btn-link"
                style={btnStyle}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
