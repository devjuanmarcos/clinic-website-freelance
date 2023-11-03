import styles from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";

import React, { useState } from "react";

const images = [
  "/public/images/imageModelDescart.svg",
  "/public/images/imageModelDescart.svg",
  "/public/images/imageModelDescart.svg",
  "/public/images/imageModelDescart.svg",
  "/public/images/imageModelDescart.svg",
];

const Example = ({ type }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <button onClick={handlePreviousImage}>Anterior</button>
      <AnimatePresence
        exit={{ opacity: 0 }}
        custom={currentImageIndex}
      >
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </AnimatePresence>
      <button onClick={handleNextImage}>Próxima</button>
    </div>
  );
};

export default Example;
