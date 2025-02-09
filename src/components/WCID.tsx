"use client";
import { useState } from "react";
import Image from "next/image";

const Pelayanan = () => {
  const [activeSection, setActiveSection] = useState("iot-dev");

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className="flex flex-wrap md:flex-row justify-center md:justify-between max-w-[1240px] gap-10">
      <div
        data-aos="fade-right"
        className="flex flex-wrap justify-center gap-2 md:flex-col md:gap-5 md:w-2/5"
      >
        <div className="flex w-full justify-center gap-2 md:gap-5 md:flex-col">
          <button
            className="flex w-1/2 md:w-full gap-2 md:gap-5 items-center bg-[#393C47] p-2 py-4 md:p-4 rounded-xl shadow-[0_4px_6px_rgba(255,241,133,0.45)] transition-all duration-300 hover:shadow-[0_12px_18px_rgba(255,241,133,0.45)]"
            onClick={() => handleButtonClick("iot-dev")}
          >
            <Image
              src="/iot.svg"
              alt="IoT Development"
              width={18}
              height={18}
              className="md:w-[30px] md:h-[30px]"
            />
            <p className="font-montserrat font-semibold text-[12px] md:text-lg text-white text-justify">
              IoT Development
            </p>
          </button>
          <button
            className="flex w-1/2 md:w-full gap-2 md:gap-5 items-center bg-[#393C47] p-2 py-4 md:p-4 rounded-xl shadow-[0_4px_6px_rgba(255,241,133,0.45)] transition-all duration-300 hover:shadow-[0_12px_18px_rgba(255,241,133,0.45)]"
            onClick={() => handleButtonClick("sw-dev")}
          >
            <Image
              src="/software.svg"
              alt="Software Development"
              width={18}
              height={18}
              className="md:w-[30px] md:h-[30px]"
            />
            <p className="font-montserrat font-semibold text-[12px] md:text-lg text-white text-justify">
              Software Development
            </p>
          </button>
        </div>

        <div className="flex w-full justify-center gap-2 md:gap-5 md:flex-col">
          <button
            className="flex w-1/3 md:w-full gap-2 md:gap-5 items-center bg-[#393C47] p-2 py-4 md:p-4 rounded-xl shadow-[0_4px_6px_rgba(255,241,133,0.45)] transition-all duration-300 hover:shadow-[0_12px_18px_rgba(255,241,133,0.45)]"
            onClick={() => handleButtonClick("clouds-dev")}
          >
            <Image
              src="/devops.svg"
              alt="DevOps"
              width={18}
              height={18}
              className="md:w-[30px] md:h-[30px]"
            />
            <p className="font-montserrat font-semibold text-[12px] md:text-lg text-white text-justify">
              DevOps
            </p>
          </button>
          <button
            className="flex w-1/3 md:w-full gap-2 md:gap-5 items-center bg-[#393C47] p-2 py-4 md:p-4 rounded-xl shadow-[0_4px_6px_rgba(255,241,133,0.45)] transition-all duration-300 hover:shadow-[0_12px_18px_rgba(255,241,133,0.45)]"
            onClick={() => handleButtonClick("db-eng")}
          >
            <Image
              src="/database.svg"
              alt="Database Engineer"
              width={18}
              height={18}
              className="md:w-[30px] md:h-[30px]"
            />
            <p className="font-montserrat font-semibold text-[12px] md:text-lg text-white text-justify">
              Database Engineer
            </p>
          </button>
          <button
            className="flex w-1/3 md:w-full gap-2 md:gap-5 items-center bg-[#393C47] p-2 py-4 md:p-4 rounded-xl shadow-[0_4px_6px_rgba(255,241,133,0.45)] transition-all duration-300 hover:shadow-[0_12px_18px_rgba(255,241,133,0.45)]"
            onClick={() => handleButtonClick("ai-dev")}
          >
            <Image
              src="/ai.svg"
              alt="AI Development"
              width={18}
              height={18}
              className="md:w-[30px] md:h-[30px]"
            />
            <p className="font-montserrat font-semibold text-[12px] md:text-lg text-white text-justify">
              AI Development
            </p>
          </button>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="w-full md:w-1/2 flex gap-[20px] flex-col"
      >
        <h1 className="font-poppins font-bold text-4xl md:text-6xl text-[#DFFDFF]">
          What Can I Do ?
        </h1>

        <p
          id="iot-dev"
          className={`font-montserrat text-justify ${
            activeSection !== "iot-dev" ? "hidden" : ""
          }`}
        >
          I am an experienced IoT and embedded system developer, skilled in
          creating solutions that integrate physical devices with digital
          systems. My work involves designing, developing, and deploying
          embedded systems that communicate effectively with various devices. I
          have completed numerous projects utilizing ESP32, Arduino boards,
          STM32 microcontrollers, and single-board computers such as Raspberry
          Pi and Orange Pi. These projects have focused on real-time monitoring,
          automation, and data processing systems. My expertise also includes
          working with a variety of sensors, microcontrollers, and communication
          protocols. I am passionate about optimizing both hardware and
          software, ensuring seamless integration, reliability, and scalability
          in the solutions I create, always aiming to meet the evolving demands
          of modern technological applications.
        </p>
        <p
          id="sw-dev"
          className={`font-montserrat text-justify ${
            activeSection !== "sw-dev" ? "hidden" : ""
          }`}
        >
          As a software developer, I am highly skilled in mobile and web
          application development, with certification in mobile development. I
          have extensive experience creating Android applications using Java,
          and I also develop cross-platform solutions using React Native. My web
          development experience includes working with technologies such as
          Next.js, Node.js, Laravel, and CodeIgniter (CI), which I have used to
          build dynamic, user-friendly websites. Additionally, I specialize in
          developing and implementing REST APIs for seamless communication
          between front-end and back-end systems. Over the years, I have
          completed numerous projects, focusing on delivering high-quality,
          maintainable code and meeting specific client needs. I always aim to
          stay up to date with the latest tools and technologies to enhance my
          development practices and build cutting-edge solutions.
        </p>
        <p
          id="clouds-dev"
          className={`font-montserrat text-justify ${
            activeSection !== "clouds-dev" ? "hidden" : ""
          }`}
        >
          In addition to my software and mobile development skills, I have
          extensive experience in DevOps. I am proficient in managing
          cloud-based servers, performing routine maintenance, monitoring system
          performance, and automating processes to ensure maximum efficiency. My
          expertise extends to creating and maintaining CI/CD pipelines, as well
          as handling deployments and managing server infrastructure. I have
          worked with multiple cloud platforms, ensuring systems are secure,
          scalable, and resilient. By combining development and operational
          tasks, I help streamline workflows, reduce downtime, and improve the
          overall performance of applications. My approach to DevOps focuses on
          collaboration and automation, aiming to deliver reliable systems and
          faster delivery cycles while optimizing infrastructure management for
          sustainable growth.
        </p>
        <p
          id="db-eng"
          className={`font-montserrat text-justify ${
            activeSection !== "db-eng" ? "hidden" : ""
          }`}
        >
          I am also experienced as a database engineer, with expertise in
          managing and optimizing a variety of databases, ensuring data
          integrity and performance. Over the years, I have worked with several
          databases, including Firebase, Oracle, MySQL, and PostgreSQL. My tasks
          have ranged from designing efficient data models to writing complex
          queries and implementing backup strategies. Additionally, I have
          managed the databases for entire companies, ensuring that data is
          securely stored, easily accessible, and well-maintained. I focus on
          both relational and NoSQL databases, optimizing queries and database
          architecture for speed and scalability. My goal is always to improve
          the reliability and accessibility of data, supporting business
          operations with efficient, secure database systems that cater to
          specific organizational needs.
        </p>
        <p
          id="ai-dev"
          className={`font-montserrat text-justify ${
            activeSection !== "ai-dev" ? "hidden" : ""
          }`}
        >
          As an AI developer, I have spent the past three years developing
          machine learning models and artificial intelligence systems. My
          experience spans multiple AI applications, including working with
          numeric data, real-time data processing, time series forecasting,
          image recognition, and natural language processing (NLP). I have
          developed and trained models using a wide range of frameworks,
          including TensorFlow, PyTorch, and scikit-learn, and have worked with
          both supervised and unsupervised learning techniques. I am skilled in
          optimizing models for performance and accuracy, delivering innovative
          AI-driven solutions. I have applied AI in various fields, such as
          healthcare, finance, and customer service, helping organizations
          automate processes and derive actionable insights from large datasets
          to improve decision-making and efficiency.
        </p>
      </div>
    </section>
  );
};

export default Pelayanan;
