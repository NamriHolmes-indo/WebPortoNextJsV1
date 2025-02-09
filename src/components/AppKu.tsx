"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface AppItem {
  src_ico: string;
  alt: string;
  link: string;
}

const AppKu = () => {
  const [apps, setApps] = useState<AppItem[]>([]);

  useEffect(() => {
    fetch("/data/app.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error fetching app data:", err));
  }, []);

  return (
    <div className="flex flex-wrap justify-center max-w-[1440px] items-center mt-10 md:mt-20 gap-10">
      {apps.map((app, index) => (
        <Link href={app.link} key={index} target="_blank" rel="noopener noreferrer">
          <Image
            data-aos="fade-left"
            src={app.src_ico}
            width={1000}
            height={0}
            alt={app.alt}
            className="h-[30px] md:h-[50px] transition-transform duration-300 ease-in-out transform hover:scale-150"
            style={{ width: "auto" }}
          />
        </Link>
      ))}
    </div>
  );
};

export default AppKu;
