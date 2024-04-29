'use client'

import Footer from "../components/Footer"
import Header from "../components/Header"
import Cart from "../components/Cart"

const page = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Header/>
        <div className="flex-1">
          <div className="container mx-auto py-6">
            <Cart />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
export default page