import { useContext } from "react"
import CartContext from "../context/CartContext"
import Link from "next/link";
import CartItem from "./CartItem";
import Button from "./Button";

const Cart = () => {
  const { addItemToCart, cart } = useContext(CartContext);

  const amountWithoutTax = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);

  const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);

  return (
    <>
      <section className="py-4 sm:py-6">
        <div className="container max-w-screen-xl mx-auto px-4">
          {cart?.cartItems?.length === 0 ? (<h2 className="text-3xl font-semibold mb-2 text-center text-neutral-100">
            Cart is empty!
          </h2>) : (<h2 className="text-3xl font-semibold mb-2 text-center text-neutral-100">
          {cart?.cartItems?.length || 0} Item(s) in Cart
          </h2>)}
        </div>
      </section>

      {cart?.cartItems?.length > 0 && (
        <section className="py-10">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <main className="lg:w-3/4">
                <article className="shadow-sm rounded mb-5 p-3 lg:p-5">
                  {cart?.cartItems?.map((cartItem) => (
                    <CartItem key={`cartItem-${cartItem.id}`} cartItem={cartItem} />
                  ))}
                </article>
              </main>
              <aside className="lg:w-1/4">
                <article className="border border-neutral shadow-sm rounded mb-5 p-3 lg:p-5">
                  <ul className="mb-5">
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Amount before Tax:</span>
                      <span>${amountWithoutTax.toFixed(2)}</span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Total Units:</span>
                      <span className="text-green-500">
                        {cart?.cartItems?.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}{" "}
                        (Units)
                      </span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>TAX:</span>
                      <span>${taxAmount}</span>
                    </li>
                    <li className="text-lg font-bold border-t border-neutral flex justify-between mt-3 pt-3">
                      <span>Total price:</span>
                      <span>${totalAmount}</span>
                    </li>
                  </ul>

                  <div className="flex flex-col gap-4">

                    <Button classes="btn-primary rounded-full w-full">
                      Checkout
                    </Button>

                    <Link
                      href="/"
                      className="btn btn-primary btn-outline rounded-full w-full"
                    >
                      Back to product
                    </Link>
                  </div>
                </article>
              </aside>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default Cart