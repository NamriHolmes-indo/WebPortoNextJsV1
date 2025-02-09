"use client";
import Form from "./Form";
import Gallery from "./galleryTab";

const Galeri = () => {
  return (
    <section data-aos="fade-right" className="flex flex-col md:flex-row gap-10">
      <Gallery />
      <Form />
    </section>
  );
};

export default Galeri;
