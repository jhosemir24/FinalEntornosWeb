import React, { useState, useEffect } from "react";
import pizza1 from '../imagenes/pizza1.jpg';
import pizza2 from '../imagenes/pizza2.jpg';
import pizza3 from '../imagenes/pizza3.jpg';
import pizza4 from '../imagenes/pizza4.jpg';
import pizza5 from '../imagenes/pizza5.jpg';
import './Div1.css';

function Banner() {
  const images = [
    pizza1,
    pizza2,
    pizza3,
    pizza4,
    pizza5
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rotateBanner = () => {
    document.getElementById('bannerImage').src = images[currentImageIndex];
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    rotateBanner();
    const intervalId = setInterval(rotateBanner, 5000); // Cambiar cada 5 segundos
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img id="bannerImage" src={images[currentImageIndex]} alt="Banner" />
    </div>
  );
}
  
  export default Banner;