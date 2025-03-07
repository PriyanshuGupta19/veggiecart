import '../index.css';
import { Phone, Mail, Truck, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50" id="hero">
      <div className="flex">
        {/* Logo Container */}
        <div className="flex-shrink-0 flex -mt-4">
          <a href="#">
            <img className="h-30 w-30" src="/images/logo.jpg" alt="Logo" />
          </a>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center bg-lime-700 px-8 py-2 text-white">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+91 70184xxxxx</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>YOUREMAIL@EMAIL.COM</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={20} />
              <span>3-5 Business Days Delivery & Free Returns</span>
            </div>
          </div>

          {/* Main Navigation Bar
          fixed top-10 left-30 bg-white shadow-md z-50 w-350  */}
          <nav className="flex justify-between items-center px-8 py-4">
            <div className="font-bold text-2xl text-green-500">
              <Link to="/">VEGEFOODS</Link>
            </div>
            <div className="flex space-x-10 text-gray-800 font-medium">
              <a href="#" onClick={() => scrollToSection("hero")} className="hover:text-green-500">Home</a>
              <a href="#" onClick={() => scrollToSection("shop")} className="hover:text-green-500">Shop</a>
              <a href="#" onClick={() => scrollToSection("about")} className="hover:text-green-500">About</a>
              <Link to="/blog" className="hover:text-green-500">Blog</Link>
              <Link to="/contact" className="hover:text-green-500">Contact</Link>
              <Link to="/cart">
                <div className="flex font-bold hover:text-green-500"> 
                  Cart
                  <ShoppingBasket size={25} />
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
