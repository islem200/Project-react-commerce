import { Children, createContext, useState } from "react";
import httpClient from "../services/httpClient";
import ProductDetails from "../components/ProductDetails";
export const ProductsContext = createContext();

const Provider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const [error, setError] = useState("");
  const fetchProduct = async () => {
    try {
      const response = await httpClient.get("/products");
      setProduct(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const addProduct = async (product) => {
    try {
      const response = await httpClient.post("/products", product);
      setProduct([...product, response.product]);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <ProductsContext.Provider
      value={{ product, addProduct, fetchProduct, setProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default Provider;
