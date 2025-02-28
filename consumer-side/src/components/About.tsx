import '../index.css';

function Body() {
    return (
        <div className="m-16">

            <div className="grid grid-cols-4 px-30 gap-6">
              <div className="h-50 w-50">
                <img src="./images/shipping.jpg" alt="Image 1" className="hover:scale-110 transition-transform duration-300 ease-in-out "/>
                <p className='font-bold text-center p-2'>FREE SHIPPING</p>
                <p className="text-center text-gray-600 text-sm p-1">ON ORDER OVER Rs. 200</p>
              </div>
              <div className="h-50 w-50">
                <img src="./public/images/shipping.jpg" alt="Image 1" className="hover:scale-110 transition-transform duration-300 ease-in-out "/>
                <p className='font-bold text-center p-2'>ALWAYS FRESH</p>
                <p className="text-center text-gray-600 text-sm p-1">PRODUCT WELL PACKAGE</p>
              </div>
              <div className="h-50 w-50">
                <img src="./public/images/shipping.jpg" alt="Image 1" className="hover:scale-110 transition-transform duration-300 ease-in-out "/>
                <p className='font-bold text-center p-2'>SUPERIOR QUALITY</p>
                <p className="text-center text-gray-600 text-sm p-1">QUALITY PRODUCTS</p>
              </div>
              <div className="h-50 w-50">
                <img src="./public/images/shipping.jpg" alt="Image 2" className="hover:scale-110 transition-transform duration-300 ease-in-out "/>
                <p className='font-bold text-center p-2'>SUPPORT</p>
                <p className="text-center text-gray-600 text-sm p-1">24/7 SUPPORT</p>
              </div>

            </div>

        <div className="grid grid-cols-3 m-30 ">
        <div className="relative">
         <img src="./public/images/shipping.jpg" alt="Image 1" />
             <p className="absolute bottom-2 left-2 text-white text-2xl font-bold p-2 bg-lime-600">
              Fruits
              </p>
              </div>

           <div className='text-center p-4'>
            <h1 className="text-2xl font-bold text-lime-500 p-2">Vegetables</h1>
            <p className='text-gray-600 p-4'> Protect the health of every home</p>
            <button className="bg-lime-400 text-white px-4 py-2 rounded-2xl hover:bg-lime-600 transition-colors duration-300">Shop now</button>
           </div>
           <div className="relative">
         <img src="./public/images/shipping.jpg" alt="Image 1" />
             <p className="absolute bottom-2 left-2 text-white text-2xl font-bold p-2 bg-lime-600">
              Juices
              </p>
              </div>
              <div className="relative">
         <img src="./public/images/shipping.jpg" alt="Image 1" />
             <p className="absolute bottom-2 left-2 text-white text-2xl font-bold p-2 bg-lime-600">
              Vegetables
              </p>
              </div>
              <div className="relative ">
         <img src="./public/images/shipping.jpg" alt="Image 1" />
             <p className="absolute bottom-2 left-2 text-white text-2xl font-bold p-2 bg-lime-600">
              Grains
              </p>
              </div>
              <div className="relative">
         <img src="./public/images/shipping.jpg" alt="Image 1" />
             <p className="absolute bottom-2 left-2 text-white text-2xl font-bold p-2 bg-lime-600">
              Dried
              </p>
              </div>
        </div>


        </div> 
    );  
}

export default Body
