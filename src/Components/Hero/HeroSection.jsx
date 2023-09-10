import React from 'react';
const HeroSection = () => {
  return (
    <section className='flex flex-col min-h-screen bg-slate-700 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30 relative" bg-[url("./assets/cover3.jpg")]'>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="font-semibold text-4xl text-center">
          Attraction
          <br />
          Yogyakarta
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
