import React from "react";
import Carousel from "./Carousel";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="product_name">
        <div className="wrapper">A Great Product</div>
      </div>
    </div>
  );
};

export default Featured;
