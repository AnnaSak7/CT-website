import React from "react";

const Telop: React.FC = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center gap-16 med:gap-32">
      <div className="flex-1"></div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl mb-10 font-bold text-center">
          <span className="whitespace-nowrap">trusted by</span>{" "}
          <span className="whitespace-nowrap">
            some of the apps you use daily
          </span>
        </h3>
        <div>logos</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10">
          <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
            We believe in good communication and a fully transparent process.
          </h3>
        </div>
      </div>
      <div>Testimonials</div>
      <div className="flex-1 bg-black"></div>
    </section>
  );
};

export default Telop;
