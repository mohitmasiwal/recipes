import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

 
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';  
import Signup from './pages/Signup';
import Services from './pages/Servises';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';
import Payment from './pages/Payment';




const App = () => {


  const [cart,setCart]=useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
        <>
         <Navbar cart={cart} setCart={setCart}/>
      <Product cart={cart} setCart={setCart} />
      <Footer/>
        
        </>
      ) 
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/detail/:id",
      element: <Detail />
    },
    {
      path: "//payment",
      element: < Payment />
    },
    {
      path: "/services",
      element: <Services />
    },
    {
      path: "/cart",
      element: (
        <>
         <Navbar/>
         <Cart cart={cart} setCart={setCart} />
      <Footer/>
        
        </>
      ) 
    },
    
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/contact",  
      element: <Contact />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
