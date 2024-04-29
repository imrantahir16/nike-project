'use client'

import { useContext, useState } from "react";
import Button from "./Button"
import Modal from "./Modal";
import AddToCart from "./AddToCart";
import CartContext from "../context/CartContext";

const ProductCard = ({product, modalToggler}) => {

  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // console.log(product);
    addItemToCart(product);
  }
  
  return (
    <div key={product.id} className="card w-full bg-base-100 shadow-xl image-full mx-auto max-w-full">
      <figure><img className="w-full" src={product.image} alt="Shoes" /></figure>
      <div className="card-body isolate">
        <h2 className="card-title text-neutral-100 drop-shadow-lg text-3xl">{product.title}</h2>
        <p className="drop-shadow-lg text-neutral-200">{product.description}</p>
        <span className="text-2xl text-neutral-100 drop-shadow-2xl">$ <strong className="text-4xl">{product.price}</strong></span>
        <div className="card-actions">
          <AddToCart onClick={handleAddToCart}>Add to cart</AddToCart>
          <div className="tooltip" data-tip="View product">
            <Button classes={"btn-ghost btn-circle px-0"} onClick={modalToggler} title="View product">
              <img src="/eye-icon.svg"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard