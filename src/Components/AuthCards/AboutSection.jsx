import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="px-16 pt-30 pb-30">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h2 className="font-bold text-xl mb-3 mt-5">Attraction</h2>
            <h2 className="font-bold text-3xl mb-5 max-w-md lg:text-4xl">
              Yogyakarta
              <hr className="border-2" />
            </h2>
          </div>
          <div className="w-full px-4 lg:w-1/2 mt-5">
            <p className="font-medium text-base mb-5 lg:text-lg">
              Yogyakarta, often referred to as "Jogja" by locals, is a
              captivating city located on the island of Java, Indonesia. This
              culturally rich and historically significant destination offers a
              plethora of attractions that make it a must-visit for travelers
              from around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
