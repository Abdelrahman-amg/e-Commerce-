import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/context";
import { notify } from "../../Utilities/Utilities";

export default function Product({ item }) {

   let {addToCart,getCount}= useContext(StoreContext)

  async function addProduct(productId){
  let token=localStorage.getItem('Token');
  if(token){
    let response =await addToCart(token,productId);
    if(response.status==200){
      getCount()
      notify('your product is added ','success')
    }
  }
  else{
    alert('you have to login first');
  }
  }

  //let {getCartCount} =useContext(StoreContext);
  return (
    <>
      <div className="col-md-2 m-3 ">
        <div className="product">
          <Link to={`/productdetails/${item._id}`}>
            <img src={item.imageCover} className="w-100" alt="" />
            <h6 className="text-main my-2">{item.category.name}</h6>
            <p className="fw-bolder">
              {item.title.split(" ").slice(0, 2).join(" ")}
            </p>
            <div className="div d-flex justify-content-between align-items-center">
              <span>{item.price}</span>
              <div>
                <i className="fas fa-star rating-color"></i>
                <span>{item.ratingsAverage}</span>
              </div>
            </div>
          </Link>
          <button  onClick={()=>addProduct(item._id)} className="btn bg-main w-100">Add Cart</button>
        </div>
      </div>
    </>
  );
}
