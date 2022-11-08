import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCart, delCart } from '../Problem02/Redux/Action/index'

import { NavLink, useParams } from 'react-router-dom'


const Product = () => {
    /* we need a product id which is passed from the Products page.  */
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const dispatch = useDispatch()
    const addProduct = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addCart(product))
            setCartBtn("Remove from Cart")
        }
        else {
            dispatch(delCart(product))
            setCartBtn("Add to Cart")
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [id]);

    const Loading = () => {
        return (
            <>
                ... Loading
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 product py-5 my-5">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <hr></hr>
                    <p className="lead fw-bold">Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i></p>
                    <h3 className="display-6 fw-bolder my-4">Rs. {product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark my-3 px-4 py-2" onClick={() => addProduct(product)}>{cartBtn}</button>
                    <NavLink to="/products" className="btn btn-outline-dark bg-light text-dark ms-5 px-4 py-2">Back to Products</NavLink>
                    <NavLink to="/cart" className="btn btn-warning ms-5 px-4 py-2">Go to Cart</NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product