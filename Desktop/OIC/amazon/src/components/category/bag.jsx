import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../navbar";
import axios from "axios";
import Bags from "../pages/Bag";
function Bag() {
  const [bag, setBag] = useState([]);
  function BagData() {
    const url = "https://dummyjson.com/products/category/womens-bags?limit=4";
    axios.get(url).then((response) => {
      setBag(response.data.products);
    });
  }
  useEffect(() => {
    BagData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="image">
        <div>
          <img src="images/bag.jpg" alt="" />
        </div>
        <h1>Fashion Bag</h1>
      </div>
      <div className="ali">
        <div className="line">
          <hr />
        </div>
        <div className="auto-pro">
          {" "}
          <span className="text-center my-4">Womens Bag</span>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          {bag
            ? bag.map((value, index) => {
                return <Bags {...value} />;
              })
            : "Loading"}
        </div>
      </div>
    </>
  );
}

export default Bag;
