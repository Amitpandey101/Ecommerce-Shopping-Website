import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../Constants/data';
import {styled} from "@mui/material"

const Image=styled("Img")({

    width:"auto",
    height:280



})

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
  return (
    <Carousel  dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px" containerClass="carousel-container" swipeable={false}
    draggable={false} infinite={true}  autoPlay={true} autoPlaySpeed={4000} keyBoardControl={true} slidesToSlide={1} responsive={responsive}>
        {
            bannerData.map((data)=>{
                return (
                    <Image  src={data.url} alt="banner" />
                )
            })
        }
 
    </Carousel>
  )
}

export default Banner
