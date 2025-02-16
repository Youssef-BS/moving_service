import React from "react";
import Slider from "react-slick";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";

const Intro = () => {
  const images = [
    "https://www.demenageur-pro.fr/wp-content/uploads/2019/08/services-entreprise-demenagement.jpg",
    "https://www.demenageur-pro.fr/wp-content/uploads/2019/08/services-entreprise-demenagement.jpg",
  ];

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-blue-800 text-white p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 z-10"
        onClick={onClick}
      >
        <IoArrowForwardSharp size={24} />
      </div>
    );
  };

  // Custom Previous Arrow
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-blue-800 text-white p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 z-10"
        onClick={onClick}
      >
        <IoArrowBackSharp size={24} />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="mt-6">
        <ul className="flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-4 h-4 bg-gray-400 rounded-full hover:bg-blue-500 transition-all"></div>
    ),
  };

  return (
    <Slider {...settings}>
      {images?.map((image, index) => (
        <div key={index} className="relative flex justify-center items-center">
          <img
            src={image}
            alt={`Intro Image ${index + 1}`}
            className="rounded-xl shadow-lg w-full h-[70vh] md:h-[700px] object-cover sm:h-[500px] max-sm:h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-[#03346E] to-transparent flex flex-col justify-center items-center text-center text-white">
            <h5 className="text-xl md:text-2xl lg:text-3xl p-3 font-semibold opacity-90">
              Brauchen Sie Hilfe?
            </h5>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 w-4/5 p-3 leading-tight">
              Sie genießen die <br /> Veränderungn
            </h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mt-6">
              <button className="px-6 py-3 bg-blue-800 hover:bg-blue-950 text-white rounded-full shadow-lg font-medium transition duration-300">
                Ein Angebot bekommen
              </button>
              <a href="#contact">
              <button className="px-6 py-3 bg-gray-700 hover:bg-gray-900 text-white rounded-full shadow-lg font-medium transition duration-300">
                Kontakt
              </button>
              </a>
              
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Intro;
