import Link from "next/link"
import Header from "./Header"

const Hero = () => {
  return (
    <section id="hero" className="bg-cover bg-center" style={{backgroundImage: 'url(/hero-background.jpg)'}}>
      <div className="hero">
        <div className="hero-overlay bg-opacity-50"></div>
        <Header />
      </div>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Shoes as unique as human who wear it</h1>
            <p className="mb-5 text-white">We pride ourselves on offering a vast collection of shoes that cater to every taste, occasions and budget</p>
            <Link href={'/#products'} className="btn btn-primary rounded-full px-8">Discover more</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero