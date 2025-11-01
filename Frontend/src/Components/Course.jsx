import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"
function Course() {

  const [bookList,setBookList]=useState([])

  useEffect(()=>{

    const getBooks=async()=>{
        try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/book/getAllBooks`,
           {
          withCredentials: true, // only if you're using cookies / JWT
        });
        console.log((response.data.data))
        setBookList(response.data.data || []); // safely set array
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBooks()
  },[])

  
  return (
    <>

        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
         <div className='items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>
               We are delighted to have to <span className='text-pink-500'>here!:)</span>
            </h1>
            <p className='mt-12'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita sint accusantium dolorem nobis nam odit nulla autem doloribus, cupiditate maxime blanditiis minima voluptate eaque sapiente consequuntur officiis facilis, et quis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, sapiente.
            </p>
            <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'> Back
            </button>
            </Link>
         </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>

            {
                bookList.map((item)=>(
                    <Cards key={item.id} item={item} />
                ))
            }

        </div>

      </div>
    </>
  )
}

export default Course