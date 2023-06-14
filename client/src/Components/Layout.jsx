import React from 'react'
import Header from './Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>

        <main style={{minHeight:"80vh"}}>
        <ToastContainer/>
          {children}
        </main>
          
        <Footer/>   
       

    </div>
  )
}

export default Layout