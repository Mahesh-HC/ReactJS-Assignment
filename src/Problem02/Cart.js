import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delCart } from '../Problem02/Redux/Action/index'


const Cart = () => {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delCart(item))
  }
  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-2 bg-light rounded-3 m-5" key={cartItem.id} >
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4 py-4">
              <h5 className="text-uppercase text-black-50">{cartItem.category}</h5>
              <h2>{cartItem.title.substring(0, 25)}</h2>
              <p className="lead fw-bold">$ {cartItem.price}</p>
            </div>
            <div className="col-md-4 py-4">
              <button onClick={() => handleClose(cartItem)} className="btn btn-outline-danger m-5 float-end w-40 justify-content-center">Remove from Cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-3">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
    <div className="row">
          <div className="col-12 m-2">
            <h3 className='display fw-bold text-dark text-center'>You have ordered : </h3>
            <hr></hr>
          </div>
        </div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </>
  )
}

export default Cart