'use client'

import { useState } from "react"
import ProductCard from "./ProductCard"
import Modal from "./Modal"
import Button from "./Button"
import AddToCart from "./AddToCart"

const productList = [
  {
    id: 1,
    title: "Nike pegasus 39",
    description: "lorem ipsum dolor emit",
    image: "/peagasus-39.jpg",
    price: 249.90
  },
  {
    id: 2,
    title: "Nike pegasus 40",
    description: "lorem ipsum dolor emit",
    image: "/peagasus-40.jpg",
    price: 259.90
  },
  {
    id: 3,
    title: "Nike pegasus 41",
    description: "lorem ipsum dolor emit",
    image: "/peagasus-41.jpg",
    price: 279.90
  },
]

const Products = () => {
  const [products, setProducts] = useState(productList);

  const [modalStates, setModalStates] = useState({});

  const handleModalToggler = (productId) => {
    setModalStates(prevState => ({
      ...prevState,
      [productId]: {
        ...prevState[productId],
        isModalOpen: !prevState[productId]?.isModalOpen
      }
    }));
  };
  
  return (
    <section id="products">
      <div className="p-4 lg:container mx-auto">
        <h2 className="text-3xl p-4 text-center">Popular Collection</h2>
        <div className="grid grid-cols-1 content-center gap-6 md:grid-cols-2 xl:grid-cols-3 p-4">
          {products.map((product) => {
            return (
              <>
                <ProductCard key={`card-${product.id}`} product={product} modalToggler={() => handleModalToggler(product.id)} />
                <Modal
                  key={`product-modal-${product.id}`}
                  open={modalStates[product.id]?.isModalOpen}
                  onClose={() => handleModalToggler(product.id)}
                  disableClickOutside={false}
                  className="p-0"
                >
                  <div className="card md:card-side bg-base-100 shadow-xl">
                    <figure><img className="h-auto md:h-full w-full" src={product.image} alt="Album"/></figure>
                    <div className="card-body w-full">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => handleModalToggler(product.id)}>✕</button>
                      <h2 className="card-title">{product.title}</h2>
                      <p>{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl text-neutral-100 drop-shadow-2xl">$ <strong className="text-4xl">{product.price}</strong></span>
                      </div>
                      <div className="card-actions mt-8">
                        <AddToCart>Add to cart</AddToCart>
                        <Button classes={'btn-ghost px-6'}>Save</Button>
                      </div>
                    </div>
                  </div>
                </Modal>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Products