import React, { createContext, useContext, useState, useCallback } from 'react';

interface CarouselContextType {
  currentIndex: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

const CarouselContext = createContext<CarouselContextType | null>(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
};

interface CarouselProviderProps {
  children: React.ReactNode;
  totalSlides: number;
}

export const CarouselProvider: React.FC<CarouselProviderProps> = ({ children, totalSlides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  return (
    <CarouselContext.Provider value={{ currentIndex, totalSlides, goToSlide, nextSlide, prevSlide }}>
      {children}
    </CarouselContext.Provider>
  );
};