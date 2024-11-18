import React from "react";
import { FaTruck, FaRocket, FaHome, FaBoxes, FaShippingFast } from "react-icons/fa";
import { MdGarage } from "react-icons/md";
import { motion } from "framer-motion";

const ServiceGrid = () => {
  const services = [
    {
      title: "ENTRÜMPELUNG",
      description: "Einfach loslassen - Wir kümmern uns um Ihren Ballast.",
      icon: <FaTruck />,
    },
    {
      title: "HAUS- UND WOHNUNGSRÄUMUNG",
      description:
        "Entfesselt in Ihr Neues - Wir kümmern uns um Ihre Räumung. Einfach loslassen - Wir managen Ihre Wohnungsauflösung.",
      icon: <FaRocket />,
    },
    {
      title: "HAUSHALTSAUFLÖSUNG",
      description:
        "Entlastet in eine neue Zukunft - Unser Haushaltsauflösungs-Service.",
      icon: <FaHome />,
    },
    {
      title: "GARAGENENTRÜMPELUNG",
      description:
        "Entrümpelt in die Zukunft - Unser Garage-Räumungs-Service.",
      icon: <MdGarage />,
    },
    {
      title: "KELLERENTRÜMPELUNG",
      description:
        "Endlich Ordnung im Untergeschoss - Zuverlässige Kellerentrümpelung.",
      icon: <FaBoxes />,
    },
    {
      title: "TRANSPORT",
      description:
        "Einfacher & sicherer Transport durch unsere Fahrzeuge. Ihre Gegenstände werden ordnungsgemäß gesichert und vertraulich transportiert. Unser Transport-Service ist unkompliziert, schnell & sicher.",
      icon: <FaShippingFast />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.2,
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-center text-[#03346E] leading-tight">
            Unsere Dienstleistungen
          </h2>
          <h1 className="text-center text-5xl text-[#03346E] leading-tight">
            Ihre Sachen sind sicher, Sie <br /> sind entspannt
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 text-center p-6 rounded-lg shadow-lg"
                variants={itemVariants}
              >
                <div className="flex justify-center items-center w-12 h-12 mx-auto bg-black text-white text-2xl rounded-full">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#03346E]">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGrid;
