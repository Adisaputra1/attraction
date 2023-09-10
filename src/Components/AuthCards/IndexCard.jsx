import React from 'react';
import AttractionData from '../Data/AttractionData.json';
import CardSection from './CardsSection';

const IndexCard = () => {
  return (
    <section class="min-h-screen bg-sky-50 pb-36 px-16 xl:px-40 pt-16">
      <div class="flex flex-wrap">
        {AttractionData.map((card) => (
          <CardSection
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 mb-8">
        <button
          type="button"
          className="bg-green-700 font-semibold py-3 px-5 rounded-lg  hover:brightness-110 hover:text-green-700 drop-shadow-lg"
        >
          <p className="text-white">Load More</p>
        </button>
      </div>
    </section>
  );
};
export default IndexCard;
