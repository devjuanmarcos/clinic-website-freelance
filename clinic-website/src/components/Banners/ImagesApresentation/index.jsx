import Example from "components/Cards/Carousel/OneAnimated";
import styles from "./styles.module.css";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const CommentCard = ({ image, name }) => {
  return (
    <>
      <motion.div className={styles.container}>
        {image ? (
          <img
            src={image}
            alt='none'
          />
        ) : null}

        <p>{name}</p>
      </motion.div>
    </>
  );
};

export default function ImageApresentationBanner({ type }) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  // eslint-disable-next-line
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;

  return (
    <>
      {filteredBanner.map((banner) => (
        <section
          style={
            background
              ? {
                  backgroundColor: background,
                }
              : null
          }
          className={styles.main}
          id={anchor}
          key={filteredId}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
            </div>
            <div className={styles.carouselContainer}>
              <motion.div
                ref={carousel}
                className={styles.carousel}
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  className={styles.inner}
                  drag='x'
                  dragConstraints={{ right: 0, left: -width }}
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {banner.items.map((item, id) => (
                    <motion.div key={id}>
                      <CommentCard
                        name={item.name}
                        paragraph={item.paragraph}
                        image={item.image}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
