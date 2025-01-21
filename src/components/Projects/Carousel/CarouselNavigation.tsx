import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from './CarouselContext';

const CarouselNavigation = () => {
  const { prevSlide, nextSlide } = useCarousel();

  return (
    <>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </>
  );
};

export default CarouselNavigation;