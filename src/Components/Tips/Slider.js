import React, {useState, useEffect, useRef} from "react";
import './Slider.css'
import {SliderData} from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';


const Slider = ({slider}) => {
    const [current, setCurrent] = useState(0)
    const timeoutRef = React.useRef(null);
    const length = slider.length;
    const delay = 2500;



    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
      React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setCurrent((prevIndex) =>
              prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [current]);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
    
    //   if (!Array.isArray(slides) || slides.length <= 0) {
    //     return;
    //   }       


    return (
        <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/> 
        {SliderData.map((slide, index) => {
                return (
                    <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='image' className='carousel-image' />
            )}
          </div>
        );
      })}

      <div className="slideshowDots">
        {SliderData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${current === idx ? " active" : ""}`}
            onClick={() => {
              setCurrent(idx);
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;