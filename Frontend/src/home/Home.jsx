import React from 'react'
import Navbar from "../Components/Navbar"
import FreeBooks from '../Components/FreeBooks'
import Footer from "../Components/Footer"
import Banner from "../Components/Banner"
function Home() {
  return (
    <div>
        <Navbar/>
      <Banner/>
      <FreeBooks/>
      <Footer/>
    </div>
  )
}

export default Home