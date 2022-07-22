import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const SocialLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={100}>
        <Image
          src="/assets/social/discord.png"
          width={100}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={100}>
        <Image
          src="/assets/social/twitch.png"
          width={100}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={100}>
        <Image
          src="/assets/social/youtube.png"
          width={100}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={100}>
        <Image
          src="/assets/social/twitter.png"
          width={100}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default SocialLogos;
