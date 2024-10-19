import {} from "react";
import Product from "../Product/Product";

const Products = ({ info }) => {
  // console.log(info);
  return (
    <div>
      <h2>I am from Products</h2>

      <Product info={info}></Product>
    </div>
  );
};

export default Products;
