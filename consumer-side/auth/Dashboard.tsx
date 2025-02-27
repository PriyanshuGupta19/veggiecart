import React from "react";
import Navbar from "../src/components/navbar";
import FirstBody from "../src/components/firstbody";
import SecondBody from "../src/components/secondbody";
import Products from "../src/components/products";
import Footer from "../src/components/footer";
const Dashboard = () => {
    return (
      <>
   <Navbar />
   <FirstBody />
   <SecondBody />
   <Products />
   <Footer />
      </>
    )
  };
  
  export default Dashboard;