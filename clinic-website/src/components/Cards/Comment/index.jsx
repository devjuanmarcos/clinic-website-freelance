import IconComponent from "components/Icons/IconComponent";
import styles from "./styles.module.css";
import React from "react";

export default function CommentCard({ type }) {
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  return (
    <>
      {filteredBanner.map((banner) =>
        banner.items.map((item) => (
          <div
            key={item.id}
            className={styles.container}
          >
            <div className={styles.star}>
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
            </div>

            <p>{item.paragraph}</p>
            <img
              src={item.image}
              alt='none'
            />

            <p>{item.name}</p>
          </div>
        ))
      )}
    </>
  );
}
