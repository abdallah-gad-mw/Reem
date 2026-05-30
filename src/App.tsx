import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import { useSvgDrawingAnimation } from "./hooks/useSvgDrawingAnimation";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  // Activate drawing animation on scroll for all icons and SVGs on the page
  useSvgDrawingAnimation();

  const handleStartProjectClick = () => {
    setSelectedService("");
    setModalOpen(true);
  };

  const handleServicesSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  const handlePlanSelect = (planTitle: string) => {
    setSelectedService(planTitle);
    setModalOpen(true);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-white selection:bg-[#e67e22] selection:text-black">
      {/* Centered Floating Pill Navbar */}
      <Navbar onContactClick={handleStartProjectClick} />

      {/* Hero Section */}
      <Hero onStartProjectClick={handleStartProjectClick} />

      {/* Services Section with Motion */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Services 
          onContactClick={handleStartProjectClick} 
          onServiceSelect={handleServicesSelect} 
        />
      </motion.div>

      {/* Recent Projects Section */}
      <Projects />

      {/* Process Section with Motion */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Process />
      </motion.div>

      {/* Pricing Section with Motion */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Pricing onPlanSelect={handlePlanSelect} />
      </motion.div>

      {/* Embedded/Interactive TidyCal Booking Section with Motion */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Booking />
      </motion.div>

      {/* Spaced Elegant Footer */}
      <Footer />

      {/* Dynamic pre-filled Lead Generation Brief & Contact Modal */}
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialService={selectedService}
      />
    </div>
  );
}
