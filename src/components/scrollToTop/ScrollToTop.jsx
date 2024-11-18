import React, { useState, useEffect } from 'react';
import { IoArrowUpSharp } from 'react-icons/io5'; // Importing the up arrow icon
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importing Instagram and WhatsApp icons

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the button based on scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true); // Show button after scrolling 300px
    } else {
      setIsVisible(false); // Hide button if scrolled less than 300px
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
        
      <div className="fixed bottom-5 right-5 space-y-4">
               <button
          onClick={scrollToTop}
          className="bg-[#03346E] text-white p-4 rounded-full shadow-lg hover:bg-[#00aaff] transition duration-300 w-14 h-14 flex items-center justify-center"
          aria-label="Back to Top"
        >
          <IoArrowUpSharp className="w-6 h-6" />
        </button>
        <div className='flex'> 
        <a
          href="https://wa.me/11234567890" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition duration-300 w-14 h-14 flex items-center justify-center mr-3"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
        

        </div>


      </div>
    )
  );
};

export default ScrollToTopButton;
