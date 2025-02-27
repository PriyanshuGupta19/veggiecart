import '../index.css';
import { Phone, Mail, Truck,ShoppingBasket } from "lucide-react";
const Navbar = () => {
  return (
    <header className="w-full ">
      <div className="flex">
        {/* Logo Container */}
        <div className="flex-shrink-0 flex -mt-4">
          <a href="#">
            <img className="h-40 w-40" src="../public/images/logo.jpg" alt="Logo" />
          </a>
        </div>
        
        
        <div className="flex flex-col w-full">
        <div className="flex justify-between items-center bg-lime-700 pr-30 pt-2 pb-4 pl-4 text-white">
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
          {/* Main Navigation Bar */}
          <nav className="flex justify-between items-center pr-30 pl-4 py-4">
            <div className="font-bold text-2xl text-green-500">
              <a href="#">VEGEFOODS</a>
            </div>
            <div className="flex space-x-10 text-gray-800 font-medium">
              <a href="./App.tsx" className="hover:text-green-500">Home</a>
              <a href="#" className="hover:text-green-500">Shop</a>
              <a href="#" className="hover:text-green-500">About</a>
              <a href="#" className="hover:text-green-500">Blog</a>
              <a href="#" className="hover:text-green-500">Contact</a>
              <a href="#"> <div className="flex font-bold hover:text-green-500"> 
              cart
                <ShoppingBasket size={25} />
                </div>
                </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
