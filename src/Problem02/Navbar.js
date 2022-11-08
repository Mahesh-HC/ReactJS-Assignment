import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary py-2 shadow-sm">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLink className="navbar-brand fw-bold text-light text-align-center mx-auto fs-3" to="/">SHOPPING CART</NavLink>
          </div>
          <div className="buttons">
            <button className="btn">
              <NavLink to="/cart" className="btn btn-outline-primary text-light fs-4 ms-2"><i className='fa fa-shopping-cart fa-lg me-1'></i> Cart ({state.length})</NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar