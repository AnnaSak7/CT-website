import React from "react";
import SocialLogos from "./social-logos";
import Link from "next/link";
import Photos from "./photos";

const Telop: React.FC = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center gap-8 med:gap-12">
      <div className="flex-1"></div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem] font-bold">
          Join our{" "}
          <Link href="https://discord.com/invite/2dnCVETE8w">
            <a
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-8 decoration-1 text-4xl lg:text-5xl"
            >
              Discord
            </a>
          </Link>{" "}
          community and learn about our lives, live-streams and more!
        </h3>
        <h4 className="text-3xl lg:text-4xl pt-5 pb-5">Follow us</h4>
        <SocialLogos />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10"></div>
      </div>
      <Photos />
      <div className="flex-1 bg-black"></div>
    </section>
  );
};

export default Telop;
