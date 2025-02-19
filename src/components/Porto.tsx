"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface PortfolioItem {
  src: string;
  caption: string;
  link_demo: string;
}

const Portofolio = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    fetch("/data/porto.json")
      .then((res) => res.json())
      .then((data) => setPortfolioData(data))
      .catch((err) => console.error("Error fetching portfolio data:", err));
  }, []);

  return (
    <section
      data-aos="fade-up" className="flex flex-row w-full flex-wrap justify-center gap-5 md:gap-10">
      {portfolioData.map((image, index) => (
        <Link href={image.link_demo} key={index} target="_blank" rel="noopener noreferrer">
          <div className="relative group w-[150px] h-[150px] md:w-[225px] md:h-[225px]">
            <Image
              src={image.src}
              width={287.5}
              height={150}
              className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              alt={image.caption}
              unoptimized
            />

            <div className="absolute inset-0 bg-[#111627] bg-opacity-75 flex items-center justify-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <p className="font-montserrat font-bold text-sm text-center p-2">{image.caption}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Portofolio;
