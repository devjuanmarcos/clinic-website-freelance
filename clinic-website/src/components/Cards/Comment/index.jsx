import IconComponent from "components/Icons/IconComponent";
import styles from "./styles.module.css";
import React from "react";
import { motion } from "framer-motion";

export default function CommentCard({ paragraph, image, name }) {
  return (
    <>
      <motion.div className={styles.container}>
        <motion.div className={styles.star}>
          <IconComponent
            iconName={"AiFillStar"}
            color={"#3261e9"}
            size={24}
          />
          <IconComponent
            iconName={"AiFillStar"}
            color={"#3261e9"}
            size={24}
          />
          <IconComponent
            iconName={"AiFillStar"}
            color={"#3261e9"}
            size={24}
          />
          <IconComponent
            iconName={"AiFillStar"}
            color={"#3261e9"}
            size={24}
          />
          <IconComponent
            iconName={"AiFillStar"}
            color={"#3261e9"}
            size={24}
          />
        </motion.div>

        <motion.div className={styles.paragraph}>
          <p>{paragraph}</p>
        </motion.div>
        <img
          src={image}
          alt='none'
        />

        <p>{name}</p>
      </motion.div>
    </>
  );
}
