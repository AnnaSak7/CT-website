import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";
import { WorkLink } from "./work";

const SocialLogos: React.FC = () => (
  <div className="flex">
    {/* <SliderContainer className="" contentWidth={1290} initialOffsetX={0}> */}
    {/* <SliderItem width={100}> */}
    <WorkLink href="https://discord.com/invite/2dnCVETE8w">
      <Image
        src="/assets/social/discord.png"
        width={100}
        height={50}
        alt="logo"
        objectFit="contain"
      />
    </WorkLink>
    {/* </SliderItem> */}
    {/* <SliderItem width={100}> */}
    <WorkLink href="https://www.twitch.tv/chika_tatsuya">
      <Image
        src="/assets/social/twitch.png"
        width={100}
        height={50}
        alt="logo"
        objectFit="contain"
      />
    </WorkLink>
    {/* </SliderItem> */}
    {/* <SliderItem width={100}> */}
    <WorkLink href="https://www.youtube.com/user/chikatanaka12311">
      <Image
        src="/assets/social/youtube.png"
        width={100}
        height={50}
        alt="logo"
        objectFit="contain"
      />
    </WorkLink>
    {/* </SliderItem> */}
    {/* <SliderItem width={100}> */}
    <WorkLink href="https://twitter.com/ChikaTanaka10">
      <Image
        src="/assets/social/twitter.png"
        width={100}
        height={50}
        alt="logo"
        objectFit="contain"
      />
    </WorkLink>
    {/* </SliderItem> */}
    {/* </SliderContainer> */}
  </div>
);

export default SocialLogos;
