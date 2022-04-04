import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ImageSlide = (props)=>{

    console.log(props);
    const images= props.images;
    const main = props.main;
    return(
        <Carousel 
        showArrows={true} 
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}     
        width="100%"
        dynamicHeight="240px"
    >
   <div>
               <img src={main} />
           </div>
            {images? images.map(i=>
               <div>
               <img src={i.storeImage} />
           </div>
                ):null}
</Carousel>



    );
}

export default ImageSlide;