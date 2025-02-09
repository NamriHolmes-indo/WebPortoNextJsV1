"use client";
import Image from "next/image";
import SliderTentang from "./AboutImageSlider";

const images = [
  "/it-1.jpeg",
  "/mawapres-1.jpeg",
  "/speakers-1.jpeg",
  "/mawapres-1.jpeg",
];

const TentangAku = () => {
  return (
    <div className="flex flex-col-reverse gap-10 md:flex-row justify-between max-w-[1240px]">
      <div
        data-aos="fade-right"
        className="flex flex-col w-full md:w-1/2 gap-10 md:gap-20"
      >
        <h1 className="font-poppins font-bold text-4xl md:text-8xl text-[#DFFDFF]">
          Who am I?
        </h1>
        <p className="font-montserrat font-medium text-sm md:text-xl text-white text-justify">
          I’m a Bachelor's degree in Information Technology with extensive
          experience and achievements. My expertise spans all areas of
          Information Technology, with a guaranteed high level of proficiency in
          IoT, Embedded Systems, Machine Learning, Deep Learning, and DevOps. I
          am also skilled as a Full-Stack Developer for both websites and
          Android applications, certified by BNSP. Equipped with a wealth of
          project experience, research, and serving as a laboratory assistant
          during my studies, I am a quick learner and enjoy brainstorming new
          research ideas.
        </p>
      </div>

      <div data-aos="fade-left" className="w-full md:w-[380px]">
        <SliderTentang />
      </div>
    </div>
  );
};

export default TentangAku;
