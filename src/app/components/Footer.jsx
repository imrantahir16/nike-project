'use client'

import { useState } from "react"
import { toast} from 'react-toastify';
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isValid, setIsValid] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value)
    setIsValid(true)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !email.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')) {
      setIsValid(false);
      return;
    }

    toast.success("Subscribed successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log(`${email} subscribed!`);
    setIsSubscribed(true);

  }

  return (
    <>
      <footer className="bg-base-200 text-base-content">
        <div className="flex flex-col px-4 pt-8 pb-4 md:px-4 gap-8 container mx-auto">
          <div className="footer">
            <form noValidate onSubmit={handleSubscribe}>
              <h6 className="footer-title">Newsletter</h6> 
              <fieldset className="form-control rounded-full  w-72 max-w-full">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label> 
                <div className="join max-w-full">
                  <input 
                    type="email" 
                    placeholder="username@site.com" 
                    value={email} 
                    className={`input input-bordered ${isValid ? 'input-primary' : 'input-error'} join-item rounded-full`}
                    required 
                    onChange={handleChange}
                    /> 
                  <button className="btn btn-primary join-item rounded-full" type="submit">Subscribe</button>
                </div>
              </fieldset>
            </form>
            
          </div>
          <aside className="flex flex-col items-start gap-6 md:flex-row-reverse  md:items-center justify-between">
            <nav className="">
              <div className="grid grid-flow-col gap-4">
                <a href="https://facebook.com" target="_blank" className="transition hover:text-primary">
                  <FaFacebookF size={'1.25rem'} />
                </a>
                <a href="https://youtube.com" target="_blank" className="transition hover:text-primary">
                <FaYoutube size={'1.5rem'}/>
                </a>
                <a href="https://twitter.com" target="_blank" className="transition hover:text-primary">
                <BsTwitterX size={'1.25rem'}/>
                </a>
              </div>
            </nav>
            <div className="flex items-center gap-2">
              <p className="text-zinc-500 ">Copyright © 2024 - All right reserved by</p> 
              <a className="inline-block"><img src="/nike-logo-inverted.svg" /></a>
            </div>
          </aside>
        </div>
      </footer>
    </>
  )
}
export default Footer