import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../Utilities/Utilities";

export let StoreContext = createContext(0);

export default function StoreContextProvider({ children }) {

  const [count, setCount] = useState(0)

  function deleteFromCart(token,productId) {
    return axios
      .delete(`${baseUrl}/api/v1/cart/${productId}`, { headers: { token } })
      .then((data) => data)
      .catch((error) => error);
  }

  function getFromCart(token) {
    return axios
      .get(`${baseUrl}/api/v1/cart`, { headers: { token } })
      .then((data) => data)
      .catch((error) => error);
  }

  function addToCart(token, productId) {
    return axios
      .post(`${baseUrl}/api/v1/cart`, { productId }, { headers: { token } })
      .then((data) => data)
      .catch((error) => error);
  }

  function updateCart(token, productId,count) {
    return axios
      .put(`${baseUrl}/api/v1/cart/${productId}` ,{count},{ headers: { token } })
      .then((data) => data)
      .catch((error) => error);
  }

  function getCount() {
    let token=localStorage.getItem('Token')
    return axios
      .get(`${baseUrl}/api/v1/cart`,{ headers: { token } })
      .then((data) => setCount(data.data.numOfCartItems))
      .catch((error) => console.log(error));
  }
  useEffect(()=>{
    getCount();
  },[])

  return (
    <StoreContext.Provider value={{ addToCart, getFromCart,deleteFromCart,updateCart,count,getCount}}>
      {children}
    </StoreContext.Provider>
  );
}
