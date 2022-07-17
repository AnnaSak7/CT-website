import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Image from "next/image";

const Links: React.FC = () => (
  <Carousel className="py-10 lg:py-20">
    <CarouselItem index={0}>
      <Image
        src="/assets/social/instagram.png"
        width={50}
        height={50}
        alt="logo"
        objectFit="contain"
      />
    </CarouselItem>
    <CarouselItem index={0}>
      <Image
        src="/assets/social/youtube.png"
        width={50}
        height={50}
        alt="logo"
        objectFit="contain"
      />
    </CarouselItem>
    <CarouselItem index={0}>
      <Image
        src="/assets/social/twitch.png"
        width={50}
        height={50}
        alt="logo"
        objectFit="contain"
      />
    </CarouselItem>
    <CarouselItem index={0}>
      <Image
        src="/assets/social/discord.png"
        width={50}
        height={50}
        alt="logo"
        objectFit="contain"
      />
    </CarouselItem>
    <CarouselItem index={0}>
      <Image
        src="/assets/social/twitter.png"
        width={50}
        height={50}
        alt="logo"
        objectFit="contain"
      />
    </CarouselItem>
  </Carousel>
);

export default Links;
