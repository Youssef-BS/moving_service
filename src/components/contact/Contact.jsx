  import React from "react";
  import { FiPhone, FiMail, FiClock } from "react-icons/fi";
  import { FaArrowRight } from "react-icons/fa";
  import { motion } from "framer-motion";

  const ContactSection = () => {
    const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.2 },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    };

    return (
      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-semibold text-[#03346E] mb-4 uppercase">
              Fordern Sie ein Angebot an
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-[#03346E] mb-6 leading-tight">
              Benötigen Sie ein Angebot? Sie können uns gerne kontaktieren.
            </h1>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center text-gray-600 space-x-2">
                <FiClock className="text-2xl text-[#03346E]" />
                <span>Antworten Sie innerhalb von 24 Stunden</span>
              </div>
              <div className="flex items-center text-gray-600 space-x-2">
                <FiPhone className="text-2xl text-[#03346E]" />
                <span>Telefonischer Support</span>
              </div>
            </div>
            <p className="text-gray-600 mb-8">
              Wenn Sie professionelle Unterstützung für Umzüge und Organisationen
              benötigen, sind Sie bei uns an der richtigen Stelle. Unser
              Unternehmen bietet mit seinem Expertenteam und umfassenden
              Dienstleistungen Lösungen für alle Ihre Haus- und
              Büroorganisationsanforderungen. Wir freuen uns darauf, Ihnen zu
              helfen.
            </p>
            <div className="flex items-center space-x-4">
              <FiPhone className="text-3xl text-[#03346E]" />
              <div>
                <p className="text-lg font-bold text-[#03346E]">0157 / 54300430</p>
                <span className="text-gray-600">Rufen Sie an, um Fragen zu stellen</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form Section */}
          <motion.div
            className="bg-[#03346E] text-white p-8 rounded shadow-sm"
            variants={itemVariants}
          >
            <form>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Ihr Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-4 rounded-lg bg-blue-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md"
                    placeholder="Ihr Name"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Deine E-Mail
                </label>
                <div className="relative">
                  <FiMail className="absolute text-gray-400 left-4 top-4 text-xl" />
                  <input
                    type="email"
                    className="w-full pl-12 p-4 rounded-lg bg-blue-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md"
                    placeholder="Deine E-Mail"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Wählen Sie einen Dienst aus
                </label>
                <select className="w-full p-4 rounded-lg bg-blue-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md">
                  <option value="">Dienst auswählen</option>
                  <option value="umzug">Umzug</option>
                  <option value="transport">Transport</option>
                  <option value="hausräumung">Hausräumung</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Nachricht
                </label>
                <textarea
                  className="w-full p-4 rounded-lg bg-blue-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md"
                  rows="4"
                  placeholder="Nachricht eingeben..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition flex items-center justify-center space-x-2"
              >
                <span>Fordern Sie ein Angebot an</span>
                <FaArrowRight />
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    );
  };

  export default ContactSection;
