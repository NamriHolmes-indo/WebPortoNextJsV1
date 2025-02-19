"use client";
import Header from "@/components/Header";
import Sertifikat from "@/components/Sertif";
import TentangAku from "@/components/Tentang";
import Spacer from "@/components/Spacer";
import Pelayanan from "@/components/WCID";
import Galeri from "@/components/galeri";
import Portofolio from "@/components/Porto";
import AppKu from "@/components/AppKu";
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

        <section className="w-[100vw] p-[20px] md:py-[125px] md:px-[100] flex items-center justify-center">
          <TentangAku />
        </section>
        <Spacer isReversed={isReversed} />

        <section className="w-[100vw] bg-[#393C47] p-[20px] md:py-[125px] md:px-[100] flex gap-8 md:gap-20 flex-col items-center justify-center">
          <h1 data-aos="fade-down" className="font-poppins font-black text-4xl md:text-6xl text-[#DFFDFF]">
            My Art
          </h1>
          <Portofolio />
        </section>

        <section className="w-[100vw] p-[20px] md:py-[125px] md:px-[100] flex items-center justify-center">
          <Pelayanan />
        </section>

        <Spacer isReversed={false} />

        <section className="w-[100vw] p-[20px] md:py-[125px] md:px-[100] flex items-center justify-center">
          <Galeri />
        </section>

        {/* <section className="w-[100vw] bg-[#393C47] py-[20px] md:py-[50px] flex flex-col items-center justify-center">
          <h1 className="font-poppins font-black text-4xl md:text-6xl text-[#DFFDFF]">
            Try My App
          </h1>
          <AppKu />
        </section> */}


      </main>

      <footer className="w-full bg-[#393C47] p-2 flex items-center justify-center">
        <p
          className="font-poppins text-sm animate-pulse text-center">Created with NextJs By namri@ngonsul.com and this website run on the Ngonsul-IT server</p>
      </footer>
    </body>
  );
}
