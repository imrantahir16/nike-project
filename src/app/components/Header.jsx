'use client'

import Link from "next/link"
import { useContext } from "react"
import CartContext from "../context/CartContext";
import { TbBasket } from "react-icons/tb";

const Header = () => {
  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  return (
    <div className="w-full lg:container mx-auto">
      <div className="drawer w-full">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 
            <div className="flex-1 px-2 mx-2">
              <Link href={'/'} className="font-bold text-white text-2xl" >
                <img src="/nike-logo.svg" />
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal items-center">
                <li>
                  <Link href={'/#hero'} className="text-white text-base transition hover:bg-neutral rounded-full bg-transparent active:text-white focus:text-white">Home</Link>
                </li>
                <li>
                  <Link href={'/#products'} className="text-white text-base transition hover:bg-neutral rounded-full bg-transparent  active:text-white focus:text-white">Products</Link>
                </li>
                <li>
                  <div className="indicator hover:bg-transparent p-0" style={{backgroundColor: 'transparent'}}>
                    <span className="indicator-item badge badge-primary">{cartItems?.length || 0}</span> 
                    <Link href={"/checkout"} className="btn btn-ghost rounded-full hover:bg-neutral ">
                      <TbBasket size={'1.25rem'} />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> 
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-8 w-80 min-h-full bg-base-200 item-center">
            <li><Link className="text-center block" href={'/'}>Home</Link></li>
            <li><Link className="text-center block" href={'/#products'}>Collection</Link></li>
            <li>
              <div className="indicator hover:bg-transparent p-0 mt-4 mx-auto">
                <span className="indicator-item badge badge-primary">{cartItems?.length || 0}</span> 
                <Link href={"/cart"} className="btn btn-ghost rounded-full hover:bg-neutral">
                  <img src="/cart-icon.svg" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header