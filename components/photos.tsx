import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Image from "next/image";

const Photos: React.FC = () => (
  <Carousel>
    <CarouselItem index={0}>
      <Image
        src="/assets/photos/01.png"
        width={1000}
        height={600}
        alt="chika&tatsuya photo"
        objectFit="contain"
      />
    </CarouselItem>
    <CarouselItem index={1}>
      <Image
        src="/assets/photos/02.png"
        width={1000}
        height={600}
        alt="chika&tatsuya photo"
        objectFit="contain"
      />
    </CarouselItem>
    <CarouselItem index={2}>
      <Image
        src="/assets/photos/03.png"
        width={1000}
        height={600}
        alt="chika&tatsuya photo"
        objectFit="contain"
      />
    </CarouselItem>
    <CarouselItem index={3}>
      <Image
        src="/assets/photos/04.png"
        width={1000}
        height={600}
        alt="chika&tatsuya photo"
        objectFit="contain"
      />
    </CarouselItem>
    <CarouselItem index={4}>
      <Image
        src="/assets/photos/04.png"
        width={1000}
        height={600}
        alt="chika&tatsuya photo"
        objectFit="contain"
      />
    </CarouselItem>
  </Carousel>
);

export default Photos;
