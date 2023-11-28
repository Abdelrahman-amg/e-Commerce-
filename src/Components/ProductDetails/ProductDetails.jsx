import React, { useEffect, useState } from "react";
import { baseUrl } from "../../Utilities/Utilities";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetails() {

  const [Details, setDetails] = useState({});
  const [Loading, setLoading] = useState(true)

  let { id } = useParams();

  async function getDetails() {
    let { data } = await axios.get(`${baseUrl}/api/v1/products/${id}`);
    console.log(data.data);
    setDetails(data.data);
    if(Details){
      setLoading(false);
    }
  }

  useEffect(() => {
    getDetails();
  },[]);

  return <>
  {!Loading?<div className="container py-5">
        <div className="row ">
          <div className="col-md-3">
            <img src={Details.imageCover} className="w-100" alt="" />
          </div>
          <div className="col-md-9 d-flex align-items-center">
            <div>
              <h3>{Details.title}</h3>
              <p>{Details.description}</p>
            </div>
          </div>
        </div>
      </div>:<div className="vh-100 d-flex justify-content-center align-items-center text-main">
          <i className="fas fa-spinner fa-spin fa-8x"></i>
        </div>}
    </>
  
}
