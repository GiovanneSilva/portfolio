import { useCarousel } from './CarouselContext';

const CarouselDots = () => {
  const { currentIndex, totalSlides, goToSlide } = useCarousel();

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-2.5 h-2.5 rounded-full transition-colors ${
            currentIndex === index ? 'bg-gray-900' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;