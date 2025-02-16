import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const iconHover = { scale: 1.2, color: '#fbbf24' }; // Yellow color on hover

  return (
    <motion.footer
      className="text-white px-8 py-6 bg-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Section 1 */}
        <motion.div className="mb-8 md:mb-0" variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4">Example</h3>
          <p className="mb-2">Example</p>
          <p className="mb-2">123 Example Street, Example City, Example Country</p>
          <p className="mb-2">
            <a href="tel:+1514890000" className="hover:text-yellow-400">
              1-514-890-0000
            </a>
          </p>
          <p>
            <a href="mailto:calinscompagnies@calins.com" className="hover:text-yellow-400">
              calinscompagnies@calins.com
            </a>
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div className="mb-8 md:mb-0" variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4">Example</h3>
          <ul>
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Delivery Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Our Stores</a></li>
            <li><a href="#" className="hover:text-yellow-400">Help</a></li>
            <li><a href="#" className="hover:text-yellow-400">Work at Hugs</a></li>
          </ul>
        </motion.div>

        {/* Section 3 */}
        <motion.div className="mb-8 md:mb-0" variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4">Example</h3>
          <ul>
            <li><a href="#" className="hover:text-yellow-400">My Personal Information</a></li>
            <li><a href="#" className="hover:text-yellow-400">My Addresses</a></li>
            <li><a href="#" className="hover:text-yellow-400">My Orders</a></li>
            <li><a href="#" className="hover:text-yellow-400">My Favorites</a></li>
          </ul>
        </motion.div>

        {/* Section 4 */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="mb-4">
            <li><a href="tel:+1514890000" className="hover:text-yellow-400">1-514-890-0000</a></li>
            <li><a href="mailto:calinscompagnies@calins.com" className="hover:text-yellow-400">Send mail</a></li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <motion.a href="#" whileHover={iconHover} className="hover:text-yellow-400">
              <FaFacebook size={24} />
            </motion.a>
            <motion.a href="#" whileHover={iconHover} className="hover:text-yellow-400">
              <FaInstagram size={24} />
            </motion.a>
            <motion.a href="mailto:calinscompagnies@calins.com" whileHover={iconHover} className="hover:text-yellow-400">
              <FaEnvelope size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.p className="text-center mt-8" variants={itemVariants}>
        &copy; 2025 - All rights reserved By <br /><a href="https://tn.linkedin.com/in/youssef-ben-said-13051122b?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">
  Youssef Ben Said
</a>

      </motion.p>
    </motion.footer>
  );
};

export default Footer;
