"use client";
import { useState } from "react";
import GalleryExperience from "./galleryExperience";
import GalleryPrestasi from "./galleryPrestasi";

const Gallery = () => {
  const [isExperienceVisible, setIsExperienceVisible] = useState(true);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-poppins font-bold text-4xl md:text-6xl text-[#DFFDFF]">
        Gallery
      </h1>

      <div className="flex gap-1">
        <button
          className={`font-montserrat font-bold bg-[#393C47] p-2 rounded-md ${
            isExperienceVisible ? "shadow-lg" : ""
          }`}
          onClick={() => setIsExperienceVisible(true)}
        >
          Work and Experience
        </button>
        <button
          className={`font-montserrat font-bold bg-[#393C47] p-2 rounded-md ${
            !isExperienceVisible ? "shadow-lg" : ""
          }`}
          onClick={() => setIsExperienceVisible(false)}
        >
          Achievements
        </button>
      </div>

      <div>
        {isExperienceVisible ? <GalleryExperience /> : <GalleryPrestasi />}
      </div>
    </div>
  );
};

export default Gallery;
