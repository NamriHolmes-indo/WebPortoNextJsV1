"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/pengalaman/magang-pelindo.jpeg",
    caption: "Internship at Pelindo",
  },
  {
    src: "/pengalaman/KP.jpg",
    caption: "Internship at PT. Panca Anugrah Integrationndo",
  },
  {
    src: "/pengalaman/asprak.jpg",
    caption: "Lecturer Assistant and Laboratory Practicum",
  },
  {
    src: "/pengalaman/pusgalas.JPG",
    caption: "Community service for library system development",
  },
  {
    src: "/pengalaman/pkm.jpg",
    caption: "PKM KC Be Safe Be Happy",
  },
  {
    src: "/pengalaman/kedaireka.jpg",
    caption: "Kedaireka",
  },
  {
    src: "/pengalaman/al manar.jpg",
    caption: "Community service creating a foundation website",
  },
  {
    src: "/pengalaman/pembangunan-lab-jarkom.jpg",
    caption: "Construction of a computer network lab",
  },
  {
    src: "/pengalaman/innov pembuatan.jpg",
    caption: "Innovillage team leader",
  },
  {
    src: "/pengalaman/pengmas redi.jpg",
    caption: "Rebranding and digitalization community service",
  },
  {
    src: "/pengalaman/ramfest.jpg",
    caption: "Deputy chairman of the Ramadhan fest",
  },
];

const ITEMS_PER_SLIDE = 4;

const GalleryExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(images.length / ITEMS_PER_SLIDE);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000); // Auto-slide setiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[575px] md:w-max mx-auto relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${totalSlides * 67}%`,
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
                      className="h-auto max-h-[150px] relative w-[180px] md:w-[285px]"
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
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryExperience;
