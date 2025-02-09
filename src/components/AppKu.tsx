"use client";
import Image from "next/image";

const AppKu = () => {
  const images = [{ src: "/tel-u.png", alt: "Lulusan Telkom University" }];

  return (
    <div className="flex flex-wrap justify-center max-w-[1440px] items-center mt-10 md:mt-20 gap-10">
      {images.map((image, index) => (
        <Image
          data-aos="fade-left"
          key={index}
          src={image.src}
          width={1000}
          height={0}
          alt={image.alt}
          className="h-[30px] md:h-[50px] transition-transform duration-300 ease-in-out transform hover:scale-150"
          style={{ width: "auto" }}
        />
      ))}
    </div>
  );
};

export default AppKu;
