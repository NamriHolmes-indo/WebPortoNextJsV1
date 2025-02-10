"use client";
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center 
        h-full w-full gap-10 px-5 pt-20 pb-20 md:pt-[20vh] md:pb-0 max-w-[1440px]">
            <Image
                src="/fotoku_mbois.png"
                width={1000}
                height={0}
                alt="Fotoku Mbois"
                className="w-[85vw] md:w-[25vw] drop-shadow-[0_10px_50px_rgba(151,217,229,0.25)] animate-pulse"
                style={{ height: "auto" }} data-aos="fade-right"
            />

            <section className="flex flex-col gap-5 max-w-[100vw] flex-wrap" data-aos="fade-left">
                <p className="max-w-[90vw] flex flex-wrap font-montserrat font-bold text-sm md:text-xl text-white">
                    Software Developer, IoT Engineer, Database Engineer, Machine Learning Engineer.
                </p>
                <h1 className="font-poppins font-bold text-6xl md:text-8xl text-[#DFFDFF]">
                    Naufal A. Badri
                </h1>
                <p className="font-montserrat w-min font-bold text-sm md:text-xl text-white typewriter">
                    I do all this because I am a Technophile
                </p>

                <div className="flex justify-start gap-4 mt-4">
                    <a href="https://www.linkedin.com/in/naufal-badri-6331a411b/" target="_blank">
                        <Image
                            className="w-8 h-8 md:w-10 md:h-10"
                            src="/Linkedin.png"
                            width={50}
                            height={50}
                            alt="Linkedin Namri"
                        />
                    </a>
                    <a href="https://github.com/NamriHolmes-indo" target="_blank">
                        <Image
                            className="w-8 h-8 md:w-10 md:h-10"
                            width={50}
                            height={50}
                            src="/Github.png"
                            alt="Github Namri"
                        />
                    </a>
                    <a href="mailto:badrinaufal@gmail.com" target="_blank">
                        <Image
                            className="w-8 h-8 md:w-10 md:h-10"
                            width={50}
                            height={50}
                            src="/email.png"
                            alt="Email Namri"
                        />
                    </a>
                    <a href="https://wa.link/ggej1x" target="_blank">
                        <Image
                            className="w-8 h-8 md:w-10 md:h-10"
                            width={50}
                            height={50}
                            src="/WA.png"
                            alt="WA Namri"
                        />
                    </a>
                    <a href="https://www.instagram.com/naufal.badri/" target="_blank">
                        <Image
                            className="w-8 h-8 md:w-10 md:h-10"
                            width={50}
                            height={50}
                            src="/Instagram.png"
                            alt="IG Namri"
                        />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Header;
