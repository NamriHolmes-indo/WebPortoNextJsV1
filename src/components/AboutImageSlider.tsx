"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/it-1.jpg",
    "/mawapres-1.jpeg",
    "/speakers-1.jpeg",
    "/it-2.jpg",
    "/mawapres-2.jpeg",
];

const SliderTentang = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative max-w-2xl mx-auto">
            <div className="relative border-[10px] md:border-[20px] border-white w-full aspect-[4/6] md:w-[380px] md:h-[475px] overflow-hidden rounded-lg">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={src}
                            fill
                            className="object-cover "
                            alt={`Gambar Kegiatan ${index + 1}`}
                            unoptimized
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
            >
                ❮
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
            >
                ❯
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
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

export default SliderTentang;
