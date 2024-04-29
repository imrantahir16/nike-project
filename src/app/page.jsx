import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { ToastContainer} from 'react-toastify';
export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Footer />
    </main>
  );
}
