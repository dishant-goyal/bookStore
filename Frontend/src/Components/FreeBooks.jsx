import React from "react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
function FreeBooks() {
  const [bookList,setBookList]=useState([])

  useEffect(()=>{

    const getBooks=async()=>{
        try {
        const response = await axios.get("http://localhost:3000/api/v1/book/getAllBooks", {
          withCredentials: true, // only if you're using cookies / JWT
        });
        let data=response.data.data.filter((data) => data.category === "Free");
        setBookList(data || []); // safely set array
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBooks()
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            illum obcaecati est assumenda excepturi saepe!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {
                bookList.map((book)=>(
                    <Cards item={book} key={book.id} />
                ))
            }
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBooks;
