import React from "react";
import { FaTruck, FaUsers, FaRegLightbulb, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      title: "Zuverlässiger Service",
      description:
        "Die sichere Beförderung Ihrer Sachen hat für uns höchste Priorität. Unser erfahrenes Team, das in der Branche tätig ist, sorgt durch sorgfältiges Verpacken und sorgfältigen Transport dafür, dass Ihre Sachen unbeschädigt ankommen. Wir garantieren Ihnen eine termintreue und reibungslose Abwicklung.",
      icon: <FaTruck />,
    },
    {
      title: "Professionelles Team",
      description:
        "Unser Unternehmen hat sich auf den Umzug von Wohn- und Büroräumen spezialisiert und verfügt über ein erfahrenes Fachpersonal. Unser Team arbeitet mit Ihnen zusammen, um Ihre Bedürfnisse zu verstehen und Ihnen die beste Lösung anzubieten. Wir garantieren Ihnen eine termintreue und reibungslose Abwicklung.",
      icon: <FaUsers />,
    },
    {
      title: "Flexible und schnelle Lösungen",
      description:
        "Unser Unternehmen bietet Ihnen maßgeschneiderte Paketlösungen, die auf Ihre Bedürfnisse abgestimmt sind. Wir können auch Ihre Eilumzüge reibungslos abwickeln und Ihnen schnelle und effiziente Lösungen anbieten.",
      icon: <FaRegLightbulb />,
    },
    {
      title: "Kundenorientierter Ansatz",
      description:
        "Kundenzufriedenheit steht im Mittelpunkt all unserer Prozesse. Wir verstehen Ihre Bedürfnisse und Erwartungen am besten und informieren Sie während des gesamten Prozesses. Wir konzentrieren uns darauf, Ihre Probleme schnell und effektiv zu lösen.",
      icon: <FaHandsHelping />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            Warum uns wählen
          </h2>
          <h1 className="text-5xl font-bold text-center mb-8 text-[#03346E] leading-tight">
            Kein Umzugsstress, wir sind an Ihrer Seite
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-gray-100 p-4 rounded-lg shadow"
                  variants={itemVariants}
                >
                  <div className="text-4xl text-[#03346E] mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://cebeci-dienstleistung.de/img/feature2.jpg" // Replace with your image URL
                alt="Delivery Service"
                className="rounded-lg shadow"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
