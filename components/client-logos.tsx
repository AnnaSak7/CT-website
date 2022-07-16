import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={500}>
        <Image
          src="/assets/photos/01.png"
          width={500}
          height={200}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={500}>
        <Image
          src="/assets/photos/02.png"
          width={500}
          height={200}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={500}>
        <Image
          src="/assets/photos/03.png"
          width={500}
          height={200}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={500}>
        <Image
          src="/assets/photos/04.png"
          width={500}
          height={200}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
