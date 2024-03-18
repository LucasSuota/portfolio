"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const MyPhoto = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".image-photo",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, ease: "power3.out", duration: 1, delay: 0.5 }
    );
  });

  return (
    <div
      className="image-photo sm:w-[450px] w-4/5 sm:h-[450px] h-[350px] rounded-md z-40"
      style={{
        backgroundImage: "url('/images/my_photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default MyPhoto;
