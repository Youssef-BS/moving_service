import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  // Hook to detect when the component is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,
  });

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className="aboutUs flex flex-col lg:flex-row items-center justify-between w-11/12 md:w-5/6 lg:w-3/4 mx-auto mt-16 space-y-12 lg:space-y-0 gap-12"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Text Section */}
      <motion.div className="lg:w-1/2 space-y-6" variants={fadeInVariant}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#03346E]">
          Über Uns
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#03346E]">
          Wir entrümpeln Ihre Sachen ordnungsgemäß und sicher, lehnen Sie sich
          zurück und genießen Sie Ihre Freizeit.
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Unsere Entrümpelungsfirma bietet professionelle und diskrete
          Dienstleistungen für Haushaltsauflösungen, Garagenauflösungen und
          Kellerauflösungen an, um Ihnen den Stress und die Mühe der
          Entrümpelung abzunehmen.
        </p>
        <p className="text-base md:text-lg text-gray-700">
          Mit einem Team zuverlässiger und sorgfältiger Mitarbeiter kümmern wir
          uns um die effiziente und umweltfreundliche Entsorgung Ihrer
          Habseligkeiten, sodass Sie sich auf das Wesentliche konzentrieren
          können.
        </p>
        <p className="text-base md:text-lg text-gray-700">
          Unser Ziel ist es, Ihnen einen reibungslosen und stressfreien
          Entrümpelungsprozess zu bieten, der Ihren individuellen Bedürfnissen
          angepasst ist.
        </p>
        <div className="details flex flex-wrap gap-4 md:gap-6">
          <p className="text-base md:text-lg font-semibold text-[#03346E]">
            Zuverlässig
          </p>
          <p className="text-base md:text-lg font-semibold text-[#03346E]">
            Erfahren
          </p>
          <p className="text-base md:text-lg font-semibold text-[#03346E]">
            Professionell
          </p>
          <p className="text-base md:text-lg font-semibold text-[#03346E]">
            Sorgfältig
          </p>
        </div>
        <div className="contact space-y-1">
          <p className="text-base md:text-lg text-gray-700">
            Rufen Sie an, um Fragen zu stellen
          </p>
          <p className="text-base md:text-lg font-bold text-[#03346E]">
            0157 54300430
          </p>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="lg:w-1/2 flex justify-center"
        variants={fadeInVariant}
      >
        <img
          src="https://cebeci-dienstleistung.de/img/about2.jpg"
          alt="About Us"
          className="rounded-xl shadow-lg w-full md:w-[80%] lg:w-[90%] object-cover hover:scale-[1.01] transition-transform duration-300"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
