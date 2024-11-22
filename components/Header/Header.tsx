"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-64 bg-desaturated-dark-cyan">
      <Image
        src={
          isMobile
            ? "/images/bg-header-mobile.svg"
            : "/images/bg-header-desktop.svg"
        }
        alt="Header Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};
