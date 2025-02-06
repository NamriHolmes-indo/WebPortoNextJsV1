"use client";
import Header from "@/components/Header";
import Sertifikat from "@/components/Sertif";
import TentangAku from "@/components/Tentang";
import Spacer from "@/components/Spacer";
import Pelayanan from "@/components/WCID";
import Portofolio from "@/components/Porto";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const isReversed = true;

  return (
    <body
      className={`bg-[#111627] flex flex-col justify-center items-center antialiased`}
    >
      <header>
        <Header />
      </header>
      <main>
        <section className="w-[100vw] bg-[#393C47] py-[20px] md:py-[50px] flex items-center justify-center">
          <Sertifikat />
        </section>

        <section className="w-[100vw] p-[20px] md:py-[150px] md:px-[100] flex items-center justify-center">
          <TentangAku />

        </section>
        <Spacer isReversed={isReversed} />

        <section className="w-[100vw] p-[20px] md:py-[150px] md:px-[100] flex items-center justify-center">
          <Pelayanan />
        </section>

        <Spacer />

        <section className="w-[100vw] p-[20px] md:py-[150px] md:px-[100] flex items-center justify-center">
          <Portofolio />
        </section>
      </main>
    </body >

  );
}
