import { useEffect } from "react";
import { useContext } from "react";

import { ProductsContext } from "../context/product";
import ProductDetails from "../components/ProductDetails";

const Products = () => {
  const { product, fetchProduct } = useContext(ProductsContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="products-gallery">
      {product.map((p) => (
        <ProductDetails p={p} key={p._id} />
      ))}
    </div>
  );
};

export default Products;
