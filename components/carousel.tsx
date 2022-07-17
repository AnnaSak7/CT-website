import React, { useState } from "react";
import { EmblaCarouselType } from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";

interface ContextValue {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
}

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
});

const Carousel: React.FC<Props> = ({ children, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [ClassNames(), Autoplay()]
  );

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div ref={viewportRef} className={`w-full overfloew-hidden ${className}`}>
        <div classNam={`flex`}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
