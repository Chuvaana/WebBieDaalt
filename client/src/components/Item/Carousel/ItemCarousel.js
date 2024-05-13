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
                    style={{ width: 500, height: 500, objectFit:'cover'}}
                    src={props.item.image[0].path}
                    alt=""
                />;
    } 
}
  return (
    <div className="product__carousel__container">
      <div className="product__carousel">
      {renderImage()}
        {/* <Carousel variant="dark" interval={4000}>
          <Carousel.Item>
            <div className="carousel__image__container">

              
             
            </div>
          </Carousel.Item>
          
        </Carousel> */}
      </div>
    </div>
  );
}

export default ProductCarousel;