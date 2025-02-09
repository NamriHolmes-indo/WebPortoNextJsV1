"use client";
import Form from "./Form";
import Gallery from "./galleryTab";

const Galeri = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10">
      <Gallery />
      <Form />
    </section>
  );
};

export default Galeri;
