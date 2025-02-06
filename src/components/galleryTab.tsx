"use client";
import Image from "next/image";
import GalleryExperience from "./galleryExperience";

const Gallery = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-[#DFFDFF]">Gallery</h1>

            <div className="flex gap-1">
                <button className="font-montserrat font-bold bg-[#393C47] p-2 rounded-md">Work and Experience</button>
                <button className="font-montserrat font-bold bg-[#393C47] p-2 rounded-md">Achievements</button>
            </div>

            <div>
                <GalleryExperience />
            </div>
        </div>
    )
}

export default Gallery;