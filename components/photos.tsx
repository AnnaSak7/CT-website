import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Image from "next/image";
import { WorkLink } from "./work";

const Photos: React.FC = () => (
  <Carousel className="py-10 lg:py-20">
    <CarouselItem index={0}>
      {/* <WorkLink href="https://www.instagram.com/monchika1231/?hl=ja"> */}

      <Image
        src="/assets/photos/01.png"
        width={1000}
        height={600}
        alt="chika&tatsuya photo"
        objectFit="contain"
      />
      {/* </WorkLink> */}
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
      {/* <WorkLink href="https://discord.com/invite/2dnCVETE8w"> */}
      <Image
        src="/assets/photos/04.png"
        width={1000}
        height={600}
        alt="chika&tatsuya photo"
        objectFit="contain"
      />
      {/* </WorkLink> */}
    </CarouselItem>
    <CarouselItem index={4}>
      {/* <WorkLink href="https://twitter.com/ChikaTanaka10"> */}
      <Image
        src="/assets/photos/04.png"
        width={1000}
        height={600}
        alt="chika&tatsuya photo"
        objectFit="contain"
      />
      {/* </WorkLink> */}
    </CarouselItem>
  </Carousel>
);

export default Photos;
