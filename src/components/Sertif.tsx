"use client";
import Image from "next/image";

const Sertifikat = () => {
  const images = [
    { src: "/tel-u.png", alt: "Lulusan Telkom University" },
    { src: "/bnsp.png", alt: "Sertified Mobile Programmer" },
    { src: "/progate.png", alt: "Lulus kursus progate" },
    { src: "/sc.png", alt: "Tersertifikasi kursus CodingStudio" },
    { src: "/udemy.png", alt: "Tersertifikasi kursus udemy" },
    { src: "/dqlab.png", alt: "Tersertifikasi kursus dqlab" },
    { src: "/dicoding.png", alt: "Tersertifikasi kursus dicoding" },
  ];

  return (
    <section className="flex flex-wrap justify-center max-w-[1440px] items-center gap-10">
      {images.map((image, index) => (
        <Image
          data-aos="fade-left"
          key={index}
          src={image.src}
          width={1000}
          height={0}
          alt={image.alt}
          style={{ width: "auto" }}
          className="h-[30px] md:h-[50px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ))}
    </section>
  );
};

export default Sertifikat;
