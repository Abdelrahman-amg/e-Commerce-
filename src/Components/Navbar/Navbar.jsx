import React, { useContext } from "react";
import logo from "../../images/freshcart-logo.svg";
import { NavLink } from "react-router-dom";
import { StoreContext} from "../../context/context";

export default function Navbar() {
  let {count} =useContext(StoreContext);
   
  return (
    <>
     <nav className="navbar navbar-expand-lg  bg-main-light  ">
  <div className="container my-2">
    <NavLink className="navbar-brand" to="/">
      <img src={logo}  />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/products">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/category">
            Category
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/brands">
            Brands
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">           
        <NavLink to={'/cart'} type="button" className="btn position-relative me-2 border-0">
          Cart <i className="fa-solid fa-cart-shopping" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
           {count}
            <span className="visually-hidden">unread messages</span>
          </span>
        </NavLink>
        {/*<li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">
            logout
          </NavLink>
  </li>*/}
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/register">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/login">
            login
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}
