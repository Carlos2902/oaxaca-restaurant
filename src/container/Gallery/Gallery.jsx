import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Gallery.css';

const galleryImages= [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) =>{
    // we want to take the current from app__gallery-images
    const {current} = scrollRef;

    if (direction==='left') {
      current.scrollleft -= 300;
    } else{
      current.scrollleft += 300;
    }
  }

return(
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Instagram"/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{color: '#AAA', marginTop:'2rem'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestiae hic fugiat eius cupiditate consequuntur non sit dolorem dolores perferendis ut id fuga ex eum, enim nesciunt incidunt sapiente tempora?
      </p>
      <button
      type="button"
      className="custom__button"
      >View More</button>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {/* dynamic code block for imgs */}
        {galleryImages.map((image, index)=>(
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
            <img src={image} alt="gallery" />
            <BsInstagram className="gallery__image-icon"/>
          </div>
        ))}
      </div>

      {/* buttons to move left & right */}
      <div className="app__gallery-images_arrow">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll('left')}/>
≤        <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll('right')}/>
      </div>

    </div>

  </div>
);
}

export default Gallery;
