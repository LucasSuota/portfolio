"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Text = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".h-text",
      { opacity: 0, y: -50, ease: "back" },
      { opacity: 1, y: 0, ease: "power3.out", duration: 1, stagger: 0.3 }
    );
  });

  return (
    <section className="flex flex-col">
      <h1 className="h-text text-white text-slate-200 sm:text-6xl text-4xl font-semibold">
        LUCAS SUOTA
      </h1>
      <h2 className="h-text text-slate-200 font-thin sm:text-3xl text-xl">
        DESENVOLVEDOR FRONTEND
      </h2>
    </section>
  );
};

export default Text;
