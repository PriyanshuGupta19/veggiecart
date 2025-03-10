import '../index.css';
import { Heart,ShoppingBasket,ListCollapse } from "lucide-react";
const Products = () => {
    return (
      <>
        <div className="m-40" id="shop">
            <div>
            <h1 className="text-lime-500 text-center text-xl ">Featured Products</h1>
            <h2 className="font-bold text-5xl text-center p-6">Our Products</h2>
            <p className='text-center text-gray-500 p-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>

            <div className='grid grid-cols-4 gap-16 py-16'>
                
            <div className="relative group p-2 w-52">
              {/* Image */}
               <img src="./public/images/tomato.jpg" alt="Image 1"className="w-full hover:scale-110 transition-transform duration-300 ease-in-out"/>
                {/* Product Name */}
              <p className="font-bold text-center p-2">Tomato</p>
           {/* Price (Hidden on Hover) */}
              <p className="text-center text-lime-600 text-sm p-2 group-hover:opacity-0 transition-opacity duration-300"> $40.00 </p>
         {/* Icons - Positioned Over the Price */}
          <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <Heart size={18} /> </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ShoppingBasket size={18}/></button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ListCollapse size={18}/></button>
          </div>
         </div>
         <div className="relative group p-2 w-52">
              {/* Image */}
               <img src="./public/images/tomato.jpg" alt="Image 1"className="w-full hover:scale-110 transition-transform duration-300 ease-in-out"/>
                {/* Product Name */}
              <p className="font-bold text-center p-2">Tomato</p>
           {/* Price (Hidden on Hover) */}
              <p className="text-center text-lime-600 text-sm p-2 group-hover:opacity-0 transition-opacity duration-300"> $40.00 </p>
         {/* Icons - Positioned Over the Price */}
         <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <Heart size={18} /> </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ShoppingBasket size={18}/></button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ListCollapse size={18}/></button>
          </div>
         </div>
         <div className="relative group p-2 w-52">
              {/* Image */}
               <img src="./public/images/tomato.jpg" alt="Image 1"className="w-full hover:scale-110 transition-transform duration-300 ease-in-out"/>
                {/* Product Name */}
              <p className="font-bold text-center p-2">Tomato</p>
           {/* Price (Hidden on Hover) */}
              <p className="text-center text-lime-600 text-sm p-2 group-hover:opacity-0 transition-opacity duration-300"> $40.00 </p>
         {/* Icons - Positioned Over the Price */}
         <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <Heart size={18} /> </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ShoppingBasket size={18}/></button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ListCollapse size={18}/></button>
          </div>
         </div>
         <div className="relative group p-2 w-52">
              {/* Image */}
               <img src="./public/images/tomato.jpg" alt="Image 1"className="w-full hover:scale-110 transition-transform duration-300 ease-in-out"/>
                {/* Product Name */}
              <p className="font-bold text-center p-2">Tomato</p>
           {/* Price (Hidden on Hover) */}
              <p className="text-center text-lime-600 text-sm p-2 group-hover:opacity-0 transition-opacity duration-300"> $40.00 </p>
         {/* Icons - Positioned Over the Price */}
         <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <Heart size={18} /> </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ShoppingBasket size={18}/></button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ListCollapse size={18}/></button>
          </div>
         </div>
         <div className="relative group p-2 w-52">
              {/* Image */}
               <img src="./public/images/tomato.jpg" alt="Image 1"className="w-full hover:scale-110 transition-transform duration-300 ease-in-out"/>
                {/* Product Name */}
              <p className="font-bold text-center p-2">Tomato</p>
           {/* Price (Hidden on Hover) */}
              <p className="text-center text-lime-600 text-sm p-2 group-hover:opacity-0 transition-opacity duration-300"> $40.00 </p>
         {/* Icons - Positioned Over the Price */}
         <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <Heart size={18} /> </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ShoppingBasket size={18}/></button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ListCollapse size={18}/></button>
          </div>
         </div>
         <div className="relative group p-2 w-52">
              {/* Image */}
               <img src="./public/images/tomato.jpg" alt="Image 1"className="w-full hover:scale-110 transition-transform duration-300 ease-in-out"/>
                {/* Product Name */}
              <p className="font-bold text-center p-2">Tomato</p>
           {/* Price (Hidden on Hover) */}
              <p className="text-center text-lime-600 text-sm p-2 group-hover:opacity-0 transition-opacity duration-300"> $40.00 </p>
         {/* Icons - Positioned Over the Price */}
         <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <Heart size={18} /> </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ShoppingBasket size={18}/></button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ListCollapse size={18}/></button>
          </div>
         </div>
         <div className="relative group p-2 w-52">
              {/* Image */}
               <img src="./public/images/tomato.jpg" alt="Image 1"className="w-full hover:scale-110 transition-transform duration-300 ease-in-out"/>
                {/* Product Name */}
              <p className="font-bold text-center p-2">Tomato</p>
           {/* Price (Hidden on Hover) */}
              <p className="text-center text-lime-600 text-sm p-2 group-hover:opacity-0 transition-opacity duration-300"> $40.00 </p>
         {/* Icons - Positioned Over the Price */}
         <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <Heart size={18} /> </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ShoppingBasket size={18}/></button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ListCollapse size={18}/></button>
          </div>
         </div>
         <div className="relative group p-2 w-52">
              {/* Image */}
               <img src="./public/images/tomato.jpg" alt="Image 1"className="w-full hover:scale-110 transition-transform duration-300 ease-in-out"/>
                {/* Product Name */}
              <p className="font-bold text-center p-2">Tomato</p>
           {/* Price (Hidden on Hover) */}
              <p className="text-center text-lime-600 text-sm p-2 group-hover:opacity-0 transition-opacity duration-300"> $40.00 </p>
         {/* Icons - Positioned Over the Price */}
         <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <Heart size={18} /> </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ShoppingBasket size={18}/></button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"> <ListCollapse size={18}/></button>
          </div>
         </div>
             
            </div>
        </div>
          
        <div className="flex -mt-30 justify-between items-center px-16">
        <div className="relative w-1/2">
    <img src="./public/images/cabbage.jpg" alt="Image 1" className="h-96 w-full object-cover rounded-lg shadow-md" />
  </div>
  {/* Text Content on the Left */}
  <div className="w-1/2 p-8">
    <h1 className="text-lime-700 text-xl py-2">Best Price For You</h1>
    <p className="font-bold text-5xl py-4">Deal of the Day</p>
    <p className="text-gray-500 py-4">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
    </p>
    <p className="text-lime-700 py-2 text-3xl">Cabbage</p>
    <div className="flex gap-1 py-2">
      <p className="text-gray-500">Was $10</p>
      <p className="text-lime-700">Now $5 only</p>
    </div>
  </div>

  
</div>

        
</>
    )
}
export default Products;
