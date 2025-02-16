import AboutUs from "./components/AboutUs/AboutUs";
import Intro from "./components/intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import FeaturesSection from "./components/Features/Features";
import ServiceGrid from "./components/services/Service";
import ContactSection from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="intro">
        <Intro />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="services">
        <ServiceGrid />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;

