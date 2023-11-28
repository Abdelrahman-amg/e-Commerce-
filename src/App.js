import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import StoreContextProvider from "./context/context";
import Cart from "./Components/Cart/Cart";



export default function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "productdetails/:id", element: <ProductDetails /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer theme="colored" />
       <StoreContextProvider>
       <RouterProvider router={routes} />
       </StoreContextProvider>
    
      </>
  );
}
