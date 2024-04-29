'use client'

import { useContext } from "react";
import CartContext from "../context/CartContext";
import Button from "./Button";
import { MdDeleteForever } from "react-icons/md";

const CartItem = ({cartItem}) => {
  const { deleteItemFromCart } = useContext(CartContext);

  return (
    <div>
    <div className="flex flex-wrap lg:flex-row gap-5 items-center  mb-4">
      <div className="w-full lg:w-2/5 xl:w-2/4">
        <figure className="flex items-center leading-5">
          <div>
            <div className="block w-32 object-cover">
              <img className="rounded-lg" src={cartItem.image} alt={cartItem.title} />
            </div>
          </div>
          <figcaption className="ml-3">
            <p className="text-xl my-auto">{cartItem.title}</p>
          </figcaption>
        </figure>
      </div>
      <div>
        <div className="leading-5">
          <p className="font-semibold not-italic">
            ${cartItem.price * cartItem.quantity.toFixed(2)}
          </p>
          <small className="text-gray-400">
            {" "}
            ${cartItem.price} / per item{" "}
          </small>
        </div>
      </div>
      <div className="flex-auto">
        <div className="float-right">
          <Button
            classes="btn-circle btn-error btn-outline px-0"
            onClick={() =>
              deleteItemFromCart(cartItem?.id)
            }
          >
            <MdDeleteForever size={'1.5rem'} />
            <span className="sr-only">Delete role</span>
          </Button>
        </div>
      </div>
    </div>
    <hr className="my-4 border-neutral" />
  </div>
  )
}
export default CartItem