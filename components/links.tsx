import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";

const Links: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem></CarouselItem>
  </Carousel>
);

export default Links;
