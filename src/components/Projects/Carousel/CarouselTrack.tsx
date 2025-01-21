import React from 'react';
import { useCarousel } from './CarouselContext';

interface CarouselTrackProps {
  children: React.ReactNode;
}

const CarouselTrack: React.FC<CarouselTrackProps> = ({ children }) => {
  const { currentIndex, totalSlides } = useCarousel();

  return (
    <div 
      className="flex h-full transition-transform duration-500 ease-out"
      style={{ 
        width: `${totalSlides * 100}%`,
        transform: `translateX(-${(currentIndex * 100) / totalSlides}%)`
      }}
    >
      {children}
    </div>
  );
};

export default CarouselTrack;