import React from 'react';
import { CarouselProvider } from './CarouselContext';
import CarouselTrack from './CarouselTrack';
import CarouselNavigation from './CarouselNavigation';
import CarouselDots from './CarouselDots';

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <CarouselProvider totalSlides={slides.length}>
      <div className="relative h-[450px] overflow-hidden rounded-xl bg-white shadow-lg">
        <CarouselTrack>
          {slides}
        </CarouselTrack>
        <CarouselNavigation />
        <CarouselDots />
      </div>
    </CarouselProvider>
  );
};

export default Carousel;