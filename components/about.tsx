import React from "react";
import Member from "./member";

const About: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We are a Japanese Jazz duo couple based in New York. </strong>
          Tatsuya plays guitar and Chika on vocal. We play Jazz, Japanese City
          Pop and some originals. We deliver relax and chill vibes. If you dance
          on a chair that makes us happy.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Chika & Tatsuya</h2>
        <div className="mt-10 grid grid-ols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-10 lg:gap-30">
          <Member
            id="CT"
            name="Chika Tanaka"
            socialId="@monchika1231"
            link="https://www.instagram.com/monchika1231/?hl=ja"
          />
          <Member
            id="TS"
            name="Tatsuya Sakura"
            socialId="@tsakurai514"
            link="https://www.instagram.com/tsakurai514/?hl=ja"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
