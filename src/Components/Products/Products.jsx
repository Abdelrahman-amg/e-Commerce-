import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../Utilities/Utilities";
import Product from "../Product/Product";

export default function Products() {
  const [Products, setProducts] = useState([]);
 
  async function getProductsSlider() {
    let { data } = await axios.get(`${baseUrl}/api/v1/Products`);
    //console.log(data.data)
    setProducts(data.data);
  }

  useEffect(() => {
    getProductsSlider();
  }, []);

  return (
    <>
    {Products.length!=0?<div className="row container mx-auto">
        {Products.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </div>:<div className="vh-100 d-flex justify-content-center align-items-center text-main">
          <i className="fas fa-spinner fa-spin fa-8x"></i>
        </div>}
    </>
  );
}
