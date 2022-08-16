import React from "react";
import Image from "next/image";
import { TileWrapper, TileBackground, TileContent, Tile } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";

const Schedule = () => {
  fetch("https://api.twitch.tv/helix/schedule?broadcaster_id=chika_tatsuya")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
Schedule();

const Works = () => (
  <TileWrapper numOfPages={2}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We live stream on</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://www.twitch.tv/chika_tatsuya">
                  Twitch
                </WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/twitch.png"
                layout="responsive"
                width={840}
                height={1200}
                alt="twitch"
              />
              <div className="text-gray-500 text-2xl md:text-3xl font-semibold tracking-tight">
                EST Every Monday 3PM-6PM and Every Friday 11AM-２PM
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>Our Vlog on</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://www.youtube.com/user/chikatanaka12311">
                  Youtube
                </WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/youtube.png"
                layout="responsive"
                width={840}
                height={1200}
                alt="twitch"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
