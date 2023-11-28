import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/context";
import { notify } from "../../Utilities/Utilities";

export default function Cart() {
  let { getFromCart } = useContext(StoreContext);
  let { deleteFromCart } = useContext(StoreContext);
 let {updateCart,getCount} =useContext(StoreContext);

  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  async function getProductCart() {
    let token = localStorage.getItem("Token");
    if (token) {
      let response = await getFromCart(token);
      console.log(response);
      setProducts(response.data.data.products);
      setTotalPrice(response.data.data.totalCartPrice);
    } else {
      alert("you have to login");
    }
  }

  async function updateProductCart(productId,count) {
    let token = localStorage.getItem("Token");
    if (token) {
      let response = await updateCart(token,productId,count);
      console.log(response)
      setProducts(response.data.data.products);
      setTotalPrice(response.data.data.totalCartPrice);
      notify('product updated','success');
    } else {
      alert("you have to login");
    }
  }

  async function deleteProductCart(productId) {
    let token = localStorage.getItem("Token");
    if (token) {
      let response = await deleteFromCart(token, productId);
      getCount()
      setProducts(response.data.data.products);
      setTotalPrice(response.data.data.totalCartPrice);
    } else {
      alert("you have to login");
    }
  }

  useEffect(() => {
    getProductCart();
  }, []);

  return (
    <>
      {products.length != 0 ? (
        <div className="container bg-main-light my-3 ">
          <h3 className="fw-bolder">shop cart</h3>
          <h6 className="text-main my-3 fw-bolder">
            Total Cart Price is {totalPrice} EGP
          </h6>
          {products.map((item) => {
            return (
              <div key={item._id} className="row ">
                <div className="col-md-2 my-2">
                  <img src={item.product.imageCover} className="w-100" />
                </div>
                <div className="col-md-10 d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="fw-bolder mx-2">{item.product.title}</h6>
                    <h6 className="fw-bolder text-main mx-2">
                      {item.price} EGP
                    </h6>
                    <button
                      onClick={() => deleteProductCart(item.product._id)}
                      className="btn text-danger"
                    >
                      Remove<i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                  <div>
                    <button onClick={()=>updateProductCart(item.product._id,item.count+1)} className="btn btn-border">+</button>
                    <span className="mx-2">{item.count}</span>
                    <button onClick={()=>updateProductCart(item.product._id,item.count-1)} className="btn btn-border">-</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) :<div className="vh-100 d-flex justify-content-center align-items-center text-main">
          <i className="fas fa-spinner fa-spin fa-8x"></i>
        </div>}
    </>
  );
}
