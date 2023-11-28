import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Utilities/Utilities'
import Slider from "react-slick";

export default function Categoryslider() {
  
  const [category, setCategory] = useState([])

  async function getCategorySlider(){
    let {data}=await axios.get(`${baseUrl}/api/v1/categories`)
    //console.log(data.data)
    setCategory(data.data);
  }

  useEffect(()=>{
   getCategorySlider()
  },[])

  var settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay:true,
  };

  return <>
  <div className="my-5 container">
        <Slider {...settings} autoplaySpeed={3000} >
          {category.map((item,index)=>{
            return <div key={index}>
              <img src={item.image} className='w-100' height={250} alt="" />
              <h6 className='text-center'>{item.name} </h6>
            </div>
          })}
        </Slider>
      </div>
  </>
}
