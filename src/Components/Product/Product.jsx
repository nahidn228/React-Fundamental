import {} from "react";

const Product = ({ info }) => {
  const { message, phone } = info;
  return (
    <div>
      <h2>Product</h2>
      <p>Message : {message}</p>
      <p>Phone : {phone}</p>
    </div>
  );
};

export default Product;
