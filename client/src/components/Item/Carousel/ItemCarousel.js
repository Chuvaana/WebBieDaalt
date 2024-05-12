import Carousel from 'react-bootstrap/Carousel';
import { useContext, useState, useEffect } from "react";
import './ItemCarousel.css'

import imgas from './images-1661736021736.jpg';
const ProductCarousel = (props) => {
  useEffect(() => {
    console.log(props.item);
}, [props.item._id]);

const renderImage = () => {
    if (props.item.image && props.item.image.length > 0) {
        console.log(props.item.image[0].path);
        return <img 
                    style={{ width: 245, height: 342}}
                    src={props.item.image[0].path}
                    alt=""
                />;
    } else {
        // If no image is available, render a placeholder image
        return <img 
                    style={{ width: 245, height: 342}}
                    src={imgas} 
                    alt=""
                />;
    }
}
  return (
    <div className="product__carousel__container">
      <div className="product__carousel">
        <Carousel variant="dark" interval={4000}>
          <Carousel.Item>
            <div className="carousel__image__container">

              {renderImage()}
              {/* <img className="carousel__image" src={`https://shema-backend.vercel.app/public/${props.item.category}/${props.item.image[0].filename}`} alt="item"/> */}
            </div>
          </Carousel.Item>
          
          {/* <Carousel.Item>
            <div className="carousel__image__container">
                <img className="carousel__image" src={`https://shema-backend.vercel.app/public/${props.item.category}/${props.item.image[2].filename}`} alt="item"/>
              </div>
            </Carousel.Item> */}
        </Carousel>
      </div>
    </div>
  );
}

export default ProductCarousel;