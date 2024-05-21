import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box className="relative max-w-full mx-auto overflow-hidden">
      <Box
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Box key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`slide-${index}`}
              className="w-full h-96 object-cover"
            />
          </Box>
        ))}
      </Box>
      <Button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2"
        onClick={handlePrev}
      >
        <ArrowBackIos />
      </Button>
      <Button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2"
        onClick={handleNext}
      >
        <ArrowForwardIos />
      </Button>
    </Box>
  );
};

export default Carousel;
