"use client";

import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SocialMedias = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".social-item",
      { opacity: 0, y: -50, ease: "elastic" },
      { opacity: 1, y: 0, duration: 0.2, stagger: 0.2, delay: 1, ease: "back" }
    );

    gsap.fromTo(
      ".cv-item",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 0, duration: 0.2, stagger: 0.3, delay: 2, ease: "back" }
    );
  });

  return (
    <div className="text-slate-200 flex flex-col items-center gap-4 z-10">
      <div className="flex flex-row sm:gap-10 gap-4">
        <Link href={"https://www.linkedin.com/in/lucas-suota-91b83b222"}>
          <LinkedInIcon
            className="social-item text-slate-300 hover:text-white transition-all"
            style={{ fontSize: "2.5rem" }}
          />
        </Link>
        <Link
          className="social-item text-slate-300 hover:text-white transition-all"
          href={"https://github.com/LucasSuota"}
        >
          <GitHubIcon style={{ fontSize: "2.5rem" }} />
        </Link>
        <Link
          className="social-item text-slate-300 hover:text-white transition-all"
          href={"https://www.instagram.com/lucassuotass/"}
        >
          <InstagramIcon style={{ fontSize: "2.5rem" }} />
        </Link>
        <Link
          className="social-item text-slate-300 hover:text-white transition-all"
          href={"mailto:lucassuotass@gmail.com"}
        >
          <EmailIcon style={{ fontSize: "2.5rem" }} />
        </Link>
      </div>
      <div className="flex flex-row text-center gap-2 w-4/5">
        <a
          className="cv-item border-t-2 hover:bg-white hover:text-black transition-all border-slate-200 p-2"
          href={"/files/LUCASSUOTAPT.pdf"}
          download={true}
        >
          Portuguese Curriculum
        </a>
        <a
          className="cv-item border-t-2 hover:bg-white hover:text-black transition-all border-slate-200 p-2"
          href={"/files/LUCASSUOTAEN.pdf"}
          download={true}
        >
          English Curriculum
        </a>
      </div>
    </div>
  );
};

export default SocialMedias;
