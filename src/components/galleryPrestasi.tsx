"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/prestasi/kdmi.jpg",
    caption:
      "Finalist in Regional 4 Indonesian Language Student Debate Competition",
  },
  {
    src: "/prestasi/mawapres.jpeg",
    caption: "LLDIKTI 7 Outstanding Student Finalist 2023",
  },
  {
    src: "/prestasi/mawapres-kampus.jpg",
    caption:
      "Main Outstanding Student at Telkom Institute of Technology Surabaya 2023",
  },
  {
    src: "/prestasi/gemastik.JPG",
    caption: "Gemastik 2022 Finalist in Smart City Division",
  },
  {
    src: "/prestasi/juara innov.jpeg",
    caption:
      "Winner of Social Project Innovillage 2021 - Best Appropriate Technology Solution",
  },
  {
    src: "/prestasi/lktia.jpg",
    caption: "Finalists of ISEF UNAIR Al-Qur'an Scientific Writing Competition",
  },
  {
    src: "/prestasi/matric.jpg",
    caption:
      "Unesa Mathematics Scientific Writing Competition (MATRIC) Finalist",
  },
];

const ITEMS_PER_SLIDE = 4;

const GalleryPrestasi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(images.length / ITEMS_PER_SLIDE);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[575px] md:w-max mx-auto relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="grid grid-cols-2 auto-cols-auto w-full shrink-0"
            >
              <div className="grid grid-cols-2 auto-cols-auto gap-2 w-full">
                {images
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    (slideIndex + 1) * ITEMS_PER_SLIDE
                  )
                  .map((image, index) => (
                    <div
                      key={index}
                      className="h-auto max-h-[150px] relative w-[180px] md:w-[287px]"
                    >
                      <Image
                        src={image.src} // Ambil src dari objek
                        width={287.5} // Ukuran lebar 287.5px
                        height={150} // Ukuran tinggi 150px
                        className="rounded-lg object-cover w-full h-full"
                        alt={`Gallery Image ${index + 1}`}
                        unoptimized
                      />
                      <p className="absolute w-full bottom-2 left-1/2 transform -translate-x-1/2 text-center text-white text-sm bg-black/75 rounded p-1">
                        {image.caption}
                      </p>{" "}
                      {/* Caption */}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute mt-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPrestasi;
