import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../pages/Carousl.css';
function Slider() {
  return (
    <div>
      <Carousel>
        {/* {/ First Slide /} */}
        <Carousel.Item className="carousel-item-1">
          <Carousel.Caption>
          <h3>RASAKULLA</h3>
            <h2 className="hero">
              <span>Sweet</span> delight
            </h2>
            <p>
            Our sweets are made with the finest ingredients, ensuring a delightful experience in every bite. Each treat is crafted with care, bringing the perfect balance of sweetness and tradition. Enjoy the taste of happiness in every bite, whether it’s for a special occasion or just because.
            </p>
            <div>
              <a href="#menu" type="button" className="btn-get-started">
                GET STARTED
              </a>
              <a href="#book-a-table" className="btn-get-started">
                ORDER ONLINE
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* {/ Second Slide /} */}
        <Carousel.Item className="carousel-item-2">
          <Carousel.Caption>
            <h3>Gulab Jamun</h3>
            <h2 className="hero">
              <span>Delicious</span> Sweet
            </h2>
            <p>
            Gulab Jamun is a delicious, soft, and spongy dessert soaked in fragrant sugar syrup. With its rich flavor and melt-in-your-mouth texture, it's a perfect treat for any occasion. Indulge in the warmth and sweetness of this classic Indian delicacy
            </p>
            <div>
              <a href="#menu" type="button" className="btn-get-started">
                GET STAERTED
              </a>
              <a href="#book-a-table" className="btn-get-started">
                ORDER ONLINE
              </a>
            </div>
          </Carousel.Caption>
          
        </Carousel.Item>

         {/* Third Slide  */}
        <Carousel.Item className="carousel-item-3">
          <Carousel.Caption>
            <h3>INDIAN SWEETS</h3>
            <h2 className="hero">
              <span>TRADITIONAL</span>   SWEETS
            </h2>
            <p>
            Sweets bring joy and celebration to every moment, with their rich flavors and irresistible textures. Whether it's a traditional favorite or a modern twist, each bite offers a taste of happiness. Indulge in the sweetness that makes every occasion memorable.
            </p>
            <div>
              <a href="#menu" type="button" className="btn-get-started">
                GET STARTED
              </a>
              <a href="#book-a-table" className="btn-get-started">
                ORDER ONLINE
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default Slider;
