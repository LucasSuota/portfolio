"use client";

import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [dimensions, setDimensions] = useState({
    xposition: 200,
    yposition: 200,
  });

  return (
    <div
      className="min-h-screen flex sm:flex-row flex-col items-center justify-center sm:gap-20 gap-8 bg-scroll"
      style={{
        backgroundImage: `url('/hero_background.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="overflow-hidden">
        <Image
          className="rounded-full shadow-xl"
          src={"/profile.jpg"}
          alt="profile photo"
          width={dimensions.xposition}
          height={dimensions.yposition}
        />
      </div>
      <div className="flex flex-col sm:items-start items-center">
        <h1 className="uppercase font-bold sm:text-5xl md:text-6xl text-3xl">
          LUCAS SUOTA
        </h1>
        <h1 className="font-light text-xl">
          <ReactTypingEffect
            text={["FRONTEND DEVELOPER", "NEXTJS, REACTJS, TAILWIND"]}
          />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
