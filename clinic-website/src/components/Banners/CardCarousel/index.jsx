import styles from "./styles.module.css";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CommentCard from "components/Cards/Comment";

export default function CarouselCardsBanner({ type }) {
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
