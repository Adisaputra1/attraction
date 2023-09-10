import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AttractionData from '../Data/AttractionData.json';
import CarouselCard from './Carousel';

const IndexCarousel = () => {
  return (
    <section className=" bg-sky-50 pb-16 px-16 pt-16">
      <div className="mt-5">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          className="bg-sky-100"
        >
          {AttractionData.map((card) => (
            <div key={card.id}>
              <CarouselCard imageSrc={card.imageSrc} title={card.title} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default IndexCarousel;
