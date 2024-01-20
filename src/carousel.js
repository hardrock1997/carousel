import './carousel.css';
// import image1 from './s1.png';
// import image2 from './s2.png';
import { useState } from 'react';

// declaring all the images inside this component is not making it a reusable component.
// const imgs=[image1,image2];

// taking images array as a prop, to make this component reusable.
export default function Carousel({images}) {
    const [currentImage,setCurrentImage] = useState(0);
    
    function handlePrev() {
        setCurrentImage((prev)=>{
            // if on first image then loop to the last image else go to previous.
            return prev===0?prev=images.length-1:prev-1;
        });
    }
    function handleNext() {
        setCurrentImage((prev)=>{
            // if on last image then loop to first else go to next.
            return prev===images.length-1?0:prev+1;
        });
    }
    return (
        <div className='main_container my-5' >
            
            <img src={images[currentImage]} width={500} height={300} alt='image1' />
            
            
            <div className='btns'>
                {/* on the first image, previous button should not be there */}
            {currentImage>0 && <button onClick={handlePrev}>Prev</button>}
            <h2>Image number: {currentImage}</h2>
                {/* {next button should be there till the last page is not reached} */}
            {currentImage<images.length-1 && <button onClick={handleNext}>Next</button>}
            </div>
           
        </div>
    )
}